function getNullEvenOddArr() {
    let arr1 = [1, 2, 3, 0,"n",null, 4, "m", 5, "45", NaN, false, true];
    let countNull = 0;
    let countEven = 0;
    let countOdd = 0;
    let countNan = 0;
    for(let i = 0; i < arr1.length; i++){
      if (typeof arr1[i] === "number" && !isNaN(arr1[i])) {
          if (arr1[i] === 0) {
              countNull ++;
          } else if (arr1[i] % 2 === 0) {
              countEven ++;
          } else {
              countOdd ++;
          }
      }
  }
  console.log("Total of odd numbers are: " + countOdd);
  console.log("Total of even numbers are: " + countEven);
  console.log("Total of 0 numbers are: " + countNull);
    
  }
  
  getNullEvenOddArr();