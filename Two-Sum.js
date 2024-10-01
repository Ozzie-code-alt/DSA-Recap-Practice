/* Acceptance Criteria for this one is pretty much basic 
we can just nest loops i think this is an 0(n) time complexity because it needs to check 1 by 1

*/

const TwoSum = (num, target) => {
  let blankArr = [];
  for (i = 0; i < num.length; i++) {
    for (j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        blankArr.push(i, j);
      }
    }
  }
  console.log(blankArr);
};

TwoSum([1, 2, 3, 4], 6);
