function mergeSort(arr) {
    if (arr.length < 2) return arr;

    const n = arr.length;
    const aux = new Array(n);

    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n - size; leftStart += 2 * size) {
            const leftEnd = leftStart + size - 1;
            const rightStart = leftEnd + 1;
            const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);

            merge(arr, aux, leftStart, leftEnd, rightStart, rightEnd);
        }
    }

    return arr;
}

function merge(arr, aux, leftStart, leftEnd, rightStart, rightEnd) {
    let i = leftStart;
    let j = rightStart;

    for (let k = leftStart; k <= rightEnd; k++) {
        if (i > leftEnd) {
            aux[k] = arr[j];
            j++;
        } else if (j > rightEnd) {
            aux[k] = arr[i];
            i++;
        } else if (arr[i] <= arr[j]) {
            aux[k] = arr[i];
            i++;
        } else {
            aux[k] = arr[j];
            j++;
        }
    }

    for (let k = leftStart; k <= rightEnd; k++) {
        arr[k] = aux[k];
    }
}


const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
