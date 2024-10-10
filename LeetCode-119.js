// Pascal Tariangle  - 2 basically return based on row numbers

const getRow = (nums) => {
  //baseCase

  let containerArray = [];

  if (nums == 0) {
    containerArray.push([1]); 
    return containerArray[rowIndex]
 }

 if (nums >= 1) {
    containerArray.push([1]); 
 }

  for (let i = 1; i <= nums; i++) {
    let prevRow = containerArray[i - 1];
    let startRow = [1];

    for (let j = 1; j <prevRow.length; j++) {
      let middleValue = prevRow[j - 1] + prevRow[j];
    startRow.push(middleValue)
    }
    startRow.push(1)// end 1 
    containerArray.push(startRow)

  }
  return containerArray[nums]
};

console.log(getRow(3));
