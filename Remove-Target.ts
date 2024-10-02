// Basically this Leetcode asks me to remove the target value in array  using pointer or inpLace

//Using Pointers

const RemoveTarget = (nums: number[], target: number) => {
  let k = 0; // second Pointer (point in the next index) to use to move valid elements in the front or the first index
    // blank array here
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== target) {
      nums[k] = nums[i]; // Then we Push to blank array current index here
      k++;
    }
  }
  console.log(k)
  return k
};

RemoveTarget([1, 2, 4, 5, 6], 2);
