export const minmax = arr => {
    let min = null,
        max = null;

    arr.filter(arr => !arr.excluded).forEach(({ y0, y1 }) => {
        min = Math.min(min || y0, y0);
        max = Math.max(max || y1, y1);
    });

    return { min, max };
};

export const boundBy = (x, left, right) => {
    x = left === undefined ? x : Math.max(left, x);
    x = right === undefined ? x : Math.min(right, x);
    return x;
};
