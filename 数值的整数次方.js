function Power(base, exponent) {
    if (base === 0) return 0;
    const absExponent = Math.abs(exponent),
        res = PowerWithExponent(base, absExponent);
    return exponent < 0 ? 1 / res : res;
}
function PowerWithExponent(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent === 1) return base;
    let res = PowerWithExponent(base, exponent >> 1);
    res *= res;
    // 奇数的情况
    if (exponent & 1 === 1) {
        res *= base;
    }
    return res;
}
