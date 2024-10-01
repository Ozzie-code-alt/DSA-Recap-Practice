//basically check next array if duplicate while on the same index, Two Pointer Approach always on Ascending Order

const RemoveDuplicate = (nums) => {
  if (nums.length === 0) return null;
  blankkArr = []; // for visualization we can just return K instantly
  let k = 1;

  for (i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      //checks if previous number is Duplicate or not
      nums[k] = nums[i];
      k++;
    }
    blankkArr.push(k);
  }
  console.log(blankkArr);
};

RemoveDuplicate([1, 1, 2, 3, 4, 5, 6]);
