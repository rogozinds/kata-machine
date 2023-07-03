import {Node} from "../lib/helpers";

export default class Stack<T> {
    public length: number;
    public head?:Node<T>;
    

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        let new_head = new Node(item);
        if(this.head){
            new_head.next = this.head;
        }
        this.length++;
        this.head = new_head;
}
    pop(): T | undefined {
        if(this.head){
            let cur = this.head;
            this.head = cur.next;
            this.length--;
            return cur.value;
        }
        return undefined;
    }
    peek(): T | undefined {
        return this.head?.value;
}
}