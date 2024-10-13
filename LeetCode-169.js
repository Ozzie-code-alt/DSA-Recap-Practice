//Majority Number

//First we use Hashtables to have key-value paairs of each index
// then we loop through the index to check for the biggest key
//return key

const Leetcode169 = (nums) => {
  // HashTable

  let hashTableContainer = {};
  let minimumValue = 0;
  let returnValue = null;
  for (let i = 0; i < nums.length; i++) {
    if (hashTableContainer[nums[i]] !== undefined) {
      hashTableContainer[nums[i]] = hashTableContainer[nums[i]] + 1;
    } else {
      hashTableContainer[nums[i]] = 1;
    }
  }

  console.log(hashTableContainer);

  //loop through the generated Object
  for (let key in hashTableContainer) {
    if (hashTableContainer[key] > minimumValue) {
      minimumValue = hashTableContainer[key];
      returnValue = key;
    }
  }

  console.log(returnValue);
};

console.log(Leetcode169([2, 2, 1, 1, 1, 1, 1, 1, 2, 2]));
