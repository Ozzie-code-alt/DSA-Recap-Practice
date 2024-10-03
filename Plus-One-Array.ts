//basically plus one in an array at the last index

const PlusOne = (array: number[]) => {

    const convertedArr =  array.join("")
    const AddIndex = BigInt(convertedArr) + BigInt(1)


    console.log(AddIndex.toString().split("").map(Number))
};

PlusOne([1, 2, 3, 4, 5]);
