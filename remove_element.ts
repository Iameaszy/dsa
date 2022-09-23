// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

// 0(1)
// 0(n)
// 0 nlogn
// 0log n
// 0n^2

function removeElement(nums: number[], val: number): number {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i]
            j++
        }
    }
    return j
}


function removeElementv2(nums: number[], val: number): number {
    let i = 0;
    let n = nums.length
    while (i < n) {
        if (nums[i] === val) {
            nums[i] = nums[n - 1];
            n--
        } else {
            i++;
        }
    }
    return n;
}

console.log(removeElementv2([3, 2, 2, 3], 3))