export default class MinHeap {
    public length: number;
    private items: number[] = [];


    constructor() {
        this.length = 0;
    }

    private _ch(idx: number): number[] {
        return [(2 * idx + 1), (2 * idx + 2)];
    }

    private _par(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private _swap(idx1: number, idx2: number) {
        const tmp = this.items[idx1];
        this.items[idx1] = this.items[idx2];
        this.items[idx2] = tmp;
    }

    private _bubble(idx: number): void {
        const val = this.items[idx];
        if (this._par(idx) < 0 || this.items[this._par(idx)] < val) {
            return;
        }
        this._swap(idx, this._par(idx));
        this._bubble(this._par(idx));
    }

    private _sink(idx: number): void {
        const val = this.items[idx];
        const [left, right] = this._ch(idx);
        if(this.items[left] && this.items[right]){
           if(this.items[left] >= val && this.items[right]>=val){
               return;
           } else if (this.items[left] <= this.items[right]) {
                   this._swap(idx, left);
                   this._sink(left);
               } else {
                   this._swap(idx, right);
                   this._sink(right);
           }
        } else if(this.items[left]){
            this._swap(idx, left);
        }
    }


    insert(value: number): void {
        this.length++;
        this.items.push(value);
        this._bubble(this.items.length - 1);
    }

    delete(): number {
        if (this.length === 0) {
            throw new Error("Heap is empty");
        }
        this.length--;
        this._swap(0, this.items.length-1);
        let value = this.items.pop();
        this._sink(0)
        return value!;
    }
}
//test
const heap = new MinHeap();
const values = [120, 50, 30, 118, 40, 70, 68];
for (let i = 0; i < values.length; i++) {
    heap.insert(values[i]);
}
// console.log(`Expected ${30} = ${heap.delete()}`);
// console.log(`Expected ${40} = ${heap.delete()}`);
// console.log(`Expected ${50} = ${heap.delete()}`);
// console.log(`Expected ${68} = ${heap.delete()}`);
// console.log(`Expected ${70} = ${heap.delete()}`);
// console.log(`Expected ${118} = ${heap.delete()}`);
// console.log(`Expected ${120} = ${heap.delete()}`);
// console.log(`Expected ${0} = ${heap.length}`);
