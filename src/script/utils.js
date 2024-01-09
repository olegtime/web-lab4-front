export function checkStatus(x, y, r) {
    if (x >= 0) {
        return (y >= 0) ? false : (x <= r) && (y <= r);
    } else {
        return (y >= 0) ? Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2) : (-(x + y) <= (r * 1.5) && (x >= -r) && (y >= -(r / 2)));
    }
}