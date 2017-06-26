function minNumberInRotateArray(rotateArray) {
    let i = 0, j = rotateArray.length - 1;
    while (j - i > 1) {
        const mid = ~~((i + j) / 2),
            val = rotateArray[mid];
        if (val >= rotateArray[i]) {
            i = mid;
        } else {
            j = mid;
        }
    }
    return rotateArray[j];
}
