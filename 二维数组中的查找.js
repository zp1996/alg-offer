function Find(target, array) {
    if (array == null) return false;
    const row = array.length,
        col = row && array[0].length;
    if (row && col) {
        let i = 0, j = col - 1;
        while (i < row && j >= 0) {
            if (target === array[i][j]) {
                return true;
            } else if (target < array[i][j]) {
                j--;
            } else {
                i++;
            }
        }
    }
    return false;
}
