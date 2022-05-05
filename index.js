function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
      return [];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }