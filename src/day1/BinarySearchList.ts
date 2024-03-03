export default function bs_list(haystack: number[], needle: number): boolean {
    let high: number = haystack.length;
    let low: number = 0;

    do {
        let mid = Math.floor((high + low) / 2);
        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] < needle) {
            low = mid + 1;
        } else {
            high = mid;
        }
    } while (high > low);
    return false;
}

