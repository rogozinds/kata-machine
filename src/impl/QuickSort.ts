function swap(arr: number[], idx1: number, idx2: number): number[] {
    let tmp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = tmp;
    return arr;
}

function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return
    }
    const p = partition(arr, lo, hi);
    qs(arr, lo, p - 1);
    qs(arr, p + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    let pivot = arr[hi];
    let l  = lo-1;
    for(let i=lo;i<hi;i++){
       if(arr[i]<pivot){
           l++;
           swap(arr,l,i);
       }
    }
    l++;
    swap(arr,l,hi);
    return l;
}

export default function quick_sort(arr: number[]): void {
    qs(arr,0,arr.length-1);
}