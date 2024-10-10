// // Pascal Tariangle  - 2 basically return based on row numbers

// const getRow = (nums) => {
//   //baseCase

//   let containerArray = [];

//   if (nums == 0) {
//     containerArray.push([1]);
//     return containerArray[rowIndex]
//  }

//  if (nums >= 1) {
//     containerArray.push([1]);
//  }

//   for (let i = 1; i <= nums; i++) {
//     let prevRow = containerArray[i - 1];
//     let startRow = [1];

//     for (let j = 1; j <prevRow.length; j++) {
//       let middleValue = prevRow[j - 1] + prevRow[j];
//     startRow.push(middleValue)
//     }
//     startRow.push(1)// end 1
//     containerArray.push(startRow)

//   }
//   return containerArray[nums]
// };

// console.log(getRow(3));

const PascalTriangle = (rows) => {
  //BaseCase if row = 0 we return [1]

  let TriangleContainer = [];

  if (rows === 0) {
    TriangleContainer.push(1);
    return TriangleContainer[rows];
  }
  if (rows >= 1) {
    TriangleContainer.push(1); // our start index at TriagnleContainer[0]
  }

  for (let i = 1; i <= rows; i++) {
    let PreviousRow = TriangleContainer[i - 1]; // previous Index
    let StartRow = [1];

    for (let j = 1; j < PreviousRow.length ; j++) {
      // looping inside Previous Row to calculate the middle row of the new row then we return the new one
      // console.log(PreviousRow[j - 1]);
      let MiddleValue = PreviousRow[j - 1] + PreviousRow[j]; // or Prev Row [0] + PrevRow [1] // etc this is dynamic 
      StartRow.push(MiddleValue);
    }
    StartRow.push(1);
    TriangleContainer.push(StartRow);
  }
  return TriangleContainer;
};

console.log(PascalTriangle(4));
