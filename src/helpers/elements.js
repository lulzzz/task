export const createElement = (className, tag = 'div') => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    return node;
};

export const createSvgElement = (tag, attrs, className) => {
    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
    if (className) {
        node.className.baseVal = className;
    }
    if (attrs) {
        Object.keys(attrs).forEach(key => {
            node.setAttribute(key, attrs[key]);
        });
    }
    return node;
};

export const getSize = (el) => {
    const style = window.getComputedStyle(el);
    const w = parseFloat(style.width);
    const h = parseFloat(style.height);
    return {w, h};
}