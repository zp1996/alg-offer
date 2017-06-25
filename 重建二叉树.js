function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin) {
    if (Array.isArray(pre) && Array.isArray(vin)) {
        function CreateTree(pstart, pend, vstart, vend) {
            // 前序遍历的第一个点为根节点
            const val = pre[pstart];
            const root = new TreeNode(val);
            if (pstart === pend && vstart === vend) {
                return root;
            }
            // 找出左右子树分隔
            const index = vin.indexOf(val),
                lLen = index - vstart,
                rLen = vend - index;
            // 左边子树
            if (lLen > 0) {
                root.left = CreateTree(pstart + 1, pstart + lLen, vstart, index - 1);
            }
            // 右子树
            if (rLen > 0) {
                root.right = CreateTree(pstart + lLen + 1, pend, index + 1, vend);
            }
            return root;
        }
        const end = pre.length - 1;
        return CreateTree(0, end, 0, end);
    }
    return null;
}
