export function swap<T>(arr: T[], idx1:number, idx2:number) {
    let tmp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = tmp;
}
export class Node<T>{
    value: T;
    next?: ListNode<T>;
    prev?: ListNode<T>;
    constructor(val:T) {
        this.value = val;
        this.next=undefined;
        this.prev=undefined;
    }

}
