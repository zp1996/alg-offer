const stackA = [];
const stackB = [];
function push(node) {
    stackA.push(node);
}
function pop() {
    if (stackB.length === 0) {
        while (stackA.length !== 0) {
            stackB.push(stackA.pop());
        }
    }
    return stackB.pop();
}
