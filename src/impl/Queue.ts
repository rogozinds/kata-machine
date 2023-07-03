import {Node} from "../lib/helpers";

export default class Queue<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;


    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(item: T): void {
        let node = new Node(item);
        if (!this.tail) {
            this.tail = this.head = node;
        } else {
            this.tail.prev = node;
            node.next = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    deque(): T | undefined {
        if(!this.head){
            return undefined;
        }
        this.length--;
        let node = this.head;
        node.next = undefined;
        this.head = node.prev;
        if(this.length==0){
            this.tail = undefined;
        }
        return node.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}