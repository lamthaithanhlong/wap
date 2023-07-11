// Implement a function that finds the intersection of two arrays.
// Example:

// Input: arr1 = [1, 2, 3, 4], arr2 = [3, 4, 5, 6]
// Output: [3, 4]
const arr1 = [1, 2, 3, 4], arr2 = [3, 4, 5, 6]
function findIntersection(arr1, arr2) {
    const set1 = new Set(arr1)
    return arr2.filter((element) => set1.has(element))
}
console.log(findIntersection(arr1, arr2));


function findIntersection1(arr1, arr2) {
    let arr = []
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] == arr2[j]) {
                arr.push(arr1[i])
            }
        }
    }
    return arr
}

console.log(findIntersection1(arr1, arr2));