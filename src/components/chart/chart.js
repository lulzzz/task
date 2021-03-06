import createCheckBox from '../check-box/check-box';
import Line from './line';
import Bars from './bars';
import { createElement, createSvgElement } from '../../helpers/elements';
import './chart.css';
import {
    absToRel,
    arrSum,
    boundBy,
    calcYBounds,
    findClosestIndex,
    minmax,
    prepareData,
    relToAbs
} from '../../helpers/utils';
import { addDragAndDropListeners, addListener, removeListener } from '../../helpers/event-listeners';
import createMap from '../map/map';
import Tooltip from '../tooltip/tooltip';
import Grid from '../grid/grid';
import { dateFormat } from '../../helpers/date-time';

const typeToConstructor = {
    line: (...props) => new Line(false, ...props),
    bar: (...props) => new Bars(...props),
    area: (...props) => new Line(true, ...props)
};

const MIN_WIN_WIDTH = 0.05;

export default (data, titleText) => {
    const chartSvg = createSvgElement('svg', {}, 'ctr_chart');

    const {
        colors,
        names,
        types,
        percentage,
        stacked,
        doubleY,
        xColumn,
        yColumns,
        keys,
        globalYBounds,
        factor
    } = prepareData(data);

    let x0 = 0;
    let x1 = 1;
    let y0 = 0;
    let y1 = 1;
    let xMouse = null;
    let mouseXFixed = false;
    let yColumnFull = undefined;
    const periodFormat = (x0, x1) =>
        `${dateFormat(relToAbs(x0, xColumn[0], xColumn[xColumn.length - 1]))} - ${dateFormat(
            relToAbs(x1, xColumn[0], xColumn[xColumn.length - 1])
        )}`;

    let keyToYBound = {};
    const getYBounds = key =>
        keyToYBound[key] || (keyToYBound[key] = calcYBounds(xColumn, yColumns[key], x0, x1, types[key]));
    const resetYBoundsCash = () => (keyToYBound = {});

    const chartViewportTransform = createSvgElement('g');
    const chartAreaXTransform = createSvgElement('g');

    const wrapper = createElement('crt_wrapper');
    const controls = createElement('crt_controls');
    const header = createElement('crt_header');
    const title = createElement('crt_title');
    const bounds = createElement('crt_bounds');
    header.appendChild(title);
    header.appendChild(bounds);
    title.textContent = titleText;
    bounds.textContent = periodFormat(x0, x1);

    let tooltip, grid;

    wrapper.appendChild(header);
    wrapper.appendChild(chartSvg);
    chartSvg.appendChild(chartViewportTransform);
    chartViewportTransform.appendChild(chartAreaXTransform);
    wrapper.appendChild(controls);

    const noData = createElement('no-data');
    noData.textContent = 'NO DATA';
    wrapper.appendChild(noData);

    const init = () => {
        const visualisation = keys
            .reverse()
            .map(key => ({
                [key]: typeToConstructor[types[key]](key, xColumn, yColumns[key], colors[key])
            }))
            .reduce((obj, line) => Object.assign(obj, line), {});

        const {
            mapNode,
            setMapViewport,
            appendBeforeOverlay,
            setMapWindow,
            windowLeftEdge,
            windowRightEdge,
            mapWindow
        } = createMap();

        const updateIntersections = xRel => {
            const { width, height } = chartSvg.getBoundingClientRect();
            if (xRel !== -1) xMouse = xRel;

            const i = findClosestIndex(xColumn, xMouse, types.y0 === 'bar');

            const convertPoint = y0 => relToAbs(absToRel(y0, ...globalYBounds.y0), ...globalYBounds.y1);

            const tooltipData =
                xMouse &&
                keys
                    .filter(key => visualisation[key].visible)
                    .map(key => {
                        const y = yColumns[key][i] / (yColumnFull ? yColumnFull[i] : 1);
                        return {
                            y: key === 'y1' && doubleY ? convertPoint(y) : y,
                            color: colors[key],
                            name: names[key]
                        };
                    });

            tooltip.render(absToRel(xMouse, x0, x1), xColumn[i], tooltipData, percentage, factor);
            grid.render(
                x0,
                x1,
                y0,
                y1,
                factor,
                xColumn,
                colors,
                types.y0 === 'bar',
                percentage,
                doubleY && convertPoint,
                visualisation.y0 && visualisation.y0.visible,
                visualisation.y1 && visualisation.y1.visible
            );

            keys.forEach(key => {
                visualisation[key].onMouseMove(xMouse, x0, x1, y0, y1, width, height);
            });
        };

        const updateYArea = () => {
            let yColumnSum = undefined;
            yColumnFull = undefined;

            if (percentage) {
                keys.filter(key => visualisation[key].visible).forEach(key => {
                    yColumnFull = arrSum(yColumnFull, yColumns[key]);
                });
            }

            keys.filter(key => visualisation[key].visible).forEach(key => {
                visualisation[key].onChange(stacked ? yColumnSum : undefined, percentage ? yColumnFull : undefined);
                if (stacked) yColumnSum = arrSum(yColumnSum, yColumns[key]);
            });

            if (!percentage) {
                var [min, max] = stacked
                    ? calcYBounds(xColumn, yColumnSum, x0, x1, 'bar')
                    : minmax(keys.filter(key => visualisation[key].visible).map(key => getYBounds(key)));

                // todo: need only one time
                var [globalMin, globalMax] = stacked
                    ? calcYBounds(xColumn, yColumnSum, 0, 1, 'bar')
                    : doubleY
                    ? globalYBounds.y0
                    : minmax(keys.filter(key => visualisation[key].visible).map(key => globalYBounds[key]));

                y0 = min;
                y1 = max;
            }

            keys.forEach(key => {
                visualisation[key].yChartArea = percentage ? [0, 100] : [min, max];
                visualisation[key].yMapArea = percentage ? [0, 100] : [globalMin, globalMax];
            });

            updateIntersections(-1);
        };

        const deepUpdateYArea = () => {
            resetYBoundsCash();
            updateYArea();
        };

        const setUserViewport = (w, h) => {
            chartViewportTransform.setAttribute('transform', `scale(${w} ${h})`);
        };

        const setXChartArea = (x0, x1) => {
            chartAreaXTransform.setAttribute(
                'transform',
                `
                    scale(${1 / (x1 - x0)} 1) 
                    translate(${-x0} 0)
                `
            );
            deepUpdateYArea();
        };

        const updateXBounds = (a, b) => {
            x0 = a;
            x1 = b;
            bounds.textContent = periodFormat(x0, x1);
            setXChartArea(x0, x1);
            setMapWindow(x0, x1);
        };

        const mount = () => {
            grid = new Grid(chartSvg);
            tooltip = new Tooltip(chartSvg);

            wrapper.insertBefore(mapNode, controls);

            keys.forEach(key => {
                chartAreaXTransform.appendChild(visualisation[key].node);
            });

            keys.forEach(key => {
                appendBeforeOverlay(visualisation[key].mapNode);
            });

            const toggleCheckBoxes = {};

            keys.reverse().forEach(key => {
                visualisation[key].intersectionPoint &&
                    chartSvg.insertBefore(visualisation[key].intersectionPoint, tooltip.transformY);

                const { node: cb, toggle } = createCheckBox(
                    colors[key],
                    names[key],
                    value => {
                        visualisation[key].visible = value;
                        updateYArea();
                        if (keys.every(key => !visualisation[key].visible)) {
                            noData.style.opacity = 1;
                        } else {
                            noData.style.opacity = 0;
                        }
                    },
                    () => {
                        keys.forEach(innerKey => toggleCheckBoxes[innerKey](innerKey === key));
                    }
                );
                toggleCheckBoxes[key] = toggle;

                controls.appendChild(cb);
            });
        };

        const onResize = () => {
            const { width: svgWidth, height: svgHeight } = chartSvg.getBoundingClientRect();
            const { width: mapWidth, height: mapHeight } = mapNode.getBoundingClientRect();
            setUserViewport(svgWidth, svgHeight);
            setMapViewport(mapWidth, mapHeight);

            grid.resize();
            tooltip.resize();
            setMapWindow(x0, x1);
            updateIntersections(-1);

            noData.style.top = svgHeight / 2 + 18 + 14 + 'px';
        };

        mount();
        deepUpdateYArea();
        onResize();
        addListener(window, 'resize', onResize);

        const getMapX = x => {
            const rect = mapNode.getBoundingClientRect();
            return (x - rect.left) / rect.width;
        };

        const getChartX = x => {
            const rect = chartSvg.getBoundingClientRect();
            return (x - rect.left) / rect.width;
        };

        addDragAndDropListeners(mapWindow, coords => {
            const width = x1 - x0;
            const left = getMapX(coords.x);
            const right = left + width;
            updateXBounds(boundBy(left, 0, 1 - width), boundBy(right, width, 1));
        });
        addDragAndDropListeners(windowLeftEdge, coords => {
            const left = getMapX(coords.x + 20);
            updateXBounds(boundBy(left, 0, x1 - MIN_WIN_WIDTH), x1);
        });
        addDragAndDropListeners(windowRightEdge, coords => {
            const right = getMapX(coords.x);
            updateXBounds(x0, boundBy(right, x0 + MIN_WIN_WIDTH, 1));
        });

        const onMouseMove = e => updateIntersections(x0 + (x1 - x0) * getChartX(e.clientX));
        const onMouseLeave = () => {
            if (!mouseXFixed) updateIntersections();
        };
        addListener(chartSvg, 'mousemove', onMouseMove);
        addListener(chartSvg, 'mouseleave', onMouseLeave);
        addListener(chartSvg, 'touchmove', e => updateIntersections(x0 + (x1 - x0) * getChartX(e.touches[0].clientX)));
        addListener(chartSvg, 'mousedown', () => {
            if (mouseXFixed) {
                addListener(chartSvg, 'mousemove', onMouseMove);
            } else {
                removeListener(chartSvg, 'mousemove', onMouseMove);
            }
            mouseXFixed = !mouseXFixed;
        });
    };

    return {
        node: wrapper,
        init
    };
};
