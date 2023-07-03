import {swap} from "../lib/helpers";

export default function bubble_sort(arr: number[]): void {
    let end = arr.length - 1;
    do {
        for (let i = 0; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
            }
        }
        --end;
    } while (end >= 0);
}