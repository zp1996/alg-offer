function ListNode(x, next){
    this.val = x;
    this.next = next || null;
}
function FindKthToTail(head, k) {
    if (head == null || k === 0) return null;
    let node = head;
    for (let i = 0; i < k; i++) {
        if (node != null) {
            node = node.next;
        } else {
            return null;
        }
    }
    while (node != null) {
        node = node.next;
        head = head.next;
    }
    return head;       // 注意返回这个节点，而不是val
}
