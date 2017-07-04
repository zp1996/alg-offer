function jumpFloor(number) {
    if (number <= 2) return number;
    let res = 0, one = 1, two = 2;
    for (let i = 3; i <= number; i++) {
        res = one + two;
        one = two;
        two = res;
    }
    return res;
}
