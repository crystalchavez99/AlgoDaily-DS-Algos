function intersection(arr1,arr2){
    let res = new Set();
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                res.add(arr1[i])
            }
        }
    }
    return [...res];
}

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

console.log(intersection(nums1, nums2))

const nums3 = [4,9,5];
const nums4 = [9,4,9,8,4];

console.log(intersection(nums3, nums4))
// [9, 4]
