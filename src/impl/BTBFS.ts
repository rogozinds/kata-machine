//Here it's important its not a BST, but a BT
function walk(head:BinaryNode<number>, needle:number):boolean {
    let q :(BinaryNode<number> | null)[]=[];
    q.push(head)
    while(q.length>0){
       let cur = q.shift();
       if(!cur) {
           continue;
       }
       if(cur?.value === needle){
           return true;
       }
       q.push(cur?.left);
       q.push(cur?.right);
    }
    return false;
}
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    return walk(head,needle);
}