// Remove duplicate from a sorted array
// Example
// input [1,1,2] 
// output [1,2]

// Solution 1
// Loop through the array and append it to a new array if it doesn't exists in the new array. return new array

function removeDuplicates(nums: number[]): number {
    let j = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[j] !== nums[i]) {
            j += 1;
            nums[j] = nums[i]; 
        }
    }
    console.log(nums)
    return j + 1;
};


//console.log(removeDuplicates([1,1,1,2,2,3,3,4,5,6,7,7,8]));
console.log(removeDuplicates([1,1,2]));
// 1,2,2