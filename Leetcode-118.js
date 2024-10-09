//Pascals Trianlgle

var generate = function (numRows) {
  // console.log(numRows + 2)
  let containerArr = [];

  //Base Case
  if (numRows >= 1) {
    containerArr.push([1]); // The first row is always [1]
  }

  for (let i = 1; i < numRows; i++) {
    // console.log(i);
    let prevRow = containerArr[i - 1]; // Previous row
    console.log('this is prev Row', prevRow);
    let newRow = [1];

    for (let j = 1; j < prevRow.length; j++) {
      let middleValue = prevRow[j - 1] + prevRow[j];
      console.log('this is prev j value value', prevRow[j -1]);
      newRow.push(middleValue);
    }
    newRow.push(1);
    containerArr.push(newRow);
  }
  return containerArr;
};

console.log(generate(6));
