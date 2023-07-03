function walk(cur: BinaryNode<number> | null, path: number[]): number[] {
    if (!cur) {
        return path;
    }
    walk(cur.left, path);
    path.push(cur.value);
    return walk(cur.right, path);
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    return walk(head, path);
}