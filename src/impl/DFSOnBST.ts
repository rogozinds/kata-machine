//Here its BST, so we always choose only one branch
function walk(cur:BinaryNode<number> | null, needle:number):boolean {
    if(!cur){
        return false;
    }
    if(cur.value===needle) {
        return true;
    } else if(needle <cur.value) {
        return walk(cur.left, needle);
    }
    return walk(cur.right, needle);
}
export default function dfs(head: BinaryNode<number>|null, needle: number): boolean {
    return walk(head,needle);
}
