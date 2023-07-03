function walk(arr: number[], lo: number, hi: number, needle: number): boolean {
    do {
        let mid = Math.floor((lo + hi) / 2);
        if (arr[mid] === needle) {
            return true;
        } else if (needle < arr[mid]) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    } while (lo < hi);
    return false;
}
export default function bs_list(haystack: number[], needle: number): boolean {
    return walk(haystack, 0, haystack.length , needle);

}
