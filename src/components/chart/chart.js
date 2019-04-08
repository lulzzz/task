import createCheckBox from '../check-box/check-box';
import getLines from './get-lines';
import { createElement, createSvgElement } from '../../helpers/elements';
import './chart.css';
import { boundBy, minmax } from '../../helpers/utils';
import { addDragAndDropListeners, addListener } from '../../helpers/event-listeners';
import createMap from './map';

const MIN_WIN_WIDTH = 0.1;

export default (data, title) => {
    const chartSvg = createSvgElement('svg', {}, 'ctr_chart');

    let x0 = 0.1;
    let x1 = 0.8;

    const chartViewportTransform = createSvgElement('g');
    const chartAreaXTransform = createSvgElement('g');

    const { colors, names } = data;

    const wrapper = createElement('crt_wrapper');
    const controls = createElement('crt_controls');
    const header = createElement();
    header.textContent = title;

    wrapper.appendChild(header);
    wrapper.appendChild(chartSvg);
    chartSvg.appendChild(chartViewportTransform);
    chartViewportTransform.appendChild(chartAreaXTransform);
    wrapper.appendChild(controls);

    const init = () => {
        const lines = getLines(data);
        const {
            mapNode,
            setMapViewport,
            appendBeforeOverlay,
            setMapWindow,
            windowLeftEdge,
            windowRightEdge,
            mapWindow
        } = createMap();

        const keys = Object.keys(colors);

        const updateYChartArea = () => {
            keys.forEach(key => {
                const { min, max } = minmax(
                    keys.map(key => lines[key]).map(({ visibility, y0, y1 }) => ({ excluded: !visibility(), y0, y1 }))
                );
                lines[key].setYChartArea(min, max);
                lines[key].setYMapArea(min, max);
            });
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
        };

        const updateXBounds = (a, b) => {
            x0 = a;
            x1 = b;
            setXChartArea(x0, x1);
            setMapWindow(x0, x1);
        };

        const onResize = () => {
            const { width: svgWidth, height: svgHeight } = chartSvg.getBoundingClientRect();
            const { width: mapWidth, height: mapHeight } = mapNode.getBoundingClientRect();
            setUserViewport(svgWidth, svgHeight);
            setMapViewport(mapWidth, mapHeight);

            setMapWindow(x0, x1);
        };

        const mount = () => {
            wrapper.insertBefore(mapNode, controls);

            keys.forEach(key => {
                chartAreaXTransform.appendChild(lines[key].chartLineNode);
                appendBeforeOverlay(lines[key].mapLineNode);
                controls.appendChild(
                    createCheckBox(colors[key], names[key], value => {
                        lines[key].visibility(value);
                        updateYChartArea();
                    })
                );
            });
        };

        mount();
        updateYChartArea();
        onResize();
        addListener(window, 'resize', onResize);

        const getMapX = x => {
            const rect = mapNode.getBoundingClientRect();
            return (x - rect.left) / rect.width;
        };

        addDragAndDropListeners(mapWindow, coords => {
            const width = x1 - x0;
            const left = getMapX(coords.x);
            const right = left + width;
            updateXBounds(boundBy(left, 0, 1 - width), boundBy(right, width, 1));
        });
        addDragAndDropListeners(windowLeftEdge, coords => {
            const left = getMapX(coords.x + 10);
            updateXBounds(boundBy(left, 0, x1 - MIN_WIN_WIDTH), x1);
        });
        addDragAndDropListeners(windowRightEdge, coords => {
            const right = getMapX(coords.x);
            updateXBounds(x0, boundBy(right, x0 + MIN_WIN_WIDTH, 1));
        });
    };

    return {
        node: wrapper,
        init
    };
};
