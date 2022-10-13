function zipStrings(zipA, zipB) {
  // two strings
  // Add you solution here
  const arrA = zipA.split("");
  const arrB = zipB.split("");
  // max length of strings
  const length = Math.max(arrA.length, arrB.length);
  //empty array
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(arrA[i], arrB[i]);
  }
  /* returns a new string by concatenating all 
    of the elements in an array*/
  return result.join("");
}
