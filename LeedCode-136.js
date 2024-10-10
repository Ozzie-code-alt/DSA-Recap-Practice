// Leetcode 136

/*Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1 */

const singleVariable = (nums) => {
  console.log(nums);
  //soo best approach here would be that to use Hashmap to check the value of each index  and how many times they have appeared in the string
  /*ex: 
    arr = {
    2 : 2, 
    1 : 1
    }

*/
  const containerObj = {};
  /*No Base case here since nothing was mentioned  
in the description

wrote pseduo codes for docs
*/
  for (let i = 0; i < nums.length; i++) {
    containerObj[nums[i]] = (containerObj[nums[i]] || 0) + 1;
  }
  console.log('this is container OBJ', containerObj);
  // now we remove or filter eveything that has more than 1 length
  let resultContainer = [];

  for (let j = 0; j < nums.length; j++) {
    if (containerObj[nums[j]] === 1) {
      resultContainer.push(nums[j]);
    }
  }
  console.log('this is result container', resultContainer[0]);
};

console.log(singleVariable([4, 1, 2, 1, 2]));
