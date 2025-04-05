// For this one Do two approaches -  DO the Traditional ForLoop and HashSet approach
//Problem Set [3,1,4,1,5]

// For the For Loop Approach
// const ContainsDuplicate = (arr: number[]) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// console.log(ContainsDuplicate([3, 1, 4, 2, 1]));

// HashSet Approach

// You can use SET here to avoid duplicates and use HAS and Add High orderr functions
const ContainsDuplicateHash = (arr: number[]) => {
  const currentValue: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (currentValue.includes(arr[i])) {
      //   console.log(arr[i]);
      return true;
    } else {
      currentValue.push(arr[i]);
    }
  }

  return false;
};

console.log(ContainsDuplicateHash([3, 1, 4, 2, 9]));
