function Fibonacci(n) {
    const res = [0, 1];
    if (n < 2) return res[n];
    let one = res[0], two = res[1], num = 0;
    for (let i = 2; i <= n; i++) {
        num = one + two;
        one = two;
        two = num;
    }
    return num;
}
