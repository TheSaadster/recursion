const mergeSort = (array) => {
    if (array.length <= 1) return array;

    const midPoint = Math.floor(array.length / 2);
    const leftHalf = mergeSort(array.slice(0, midPoint));
    const rightHalf = mergeSort(array.slice(midPoint));
    return merge(leftHalf, rightHalf);
};

const merge = (leftArray, rightArray) => {
    const mergedCollection = [];

    while (leftArray.length > 0 && rightArray.length > 0) {
        const arrayWithMin = leftArray[0] < rightArray[0] ? leftArray : rightArray;
        const mergeElement = arrayWithMin.shift();
        mergedCollection.push(mergeElement);
    }

    return mergedCollection.concat(leftArray, rightArray);
}

const arr1 = [0,9,-2,3,8];
const arr2 = [3,4,19,2,10];

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));