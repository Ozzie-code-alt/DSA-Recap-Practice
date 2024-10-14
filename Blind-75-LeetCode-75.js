// Merge Strings Alternately

const MergeStrings = (word1, word2) => {
  console.log(word1, word2);
  let pointer1 = 0;
  let pointer2 = 0;
  let returnWord = [];
  while (pointer1 < word1.length && pointer2 < word2.length) {
    if (pointer1 < word1.length) {
      returnWord.push(word1[pointer1]);
      pointer1++;
    }
    if (pointer2 < word2.length) {
      returnWord.push(word2[pointer2]);
      pointer2++;
    }
  }

  console.log(returnWord);
};

console.log(MergeStrings('abc', 'rty'));
