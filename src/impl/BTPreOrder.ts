function walk(cur: BinaryNode<number> | null, path: number[]): number[] {
    if (!cur) {
        return path;
    }
    path.push(cur.value);
    walk(cur.left, path);
    return walk(cur.right, path);
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    return walk(head, path);
}