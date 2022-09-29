const fibs = (num) => {
    const arr = [0, 1];
    if (num < 2) {
        return arr.slice(0, num);
    }
    while (num > 2) {
        const newNum = arr.at(-1) + arr.at(-2);
        arr.push(newNum);
        num--;
    }
    return arr;
}

const fibsRec = (num, arr = [0, 1]) => {
    if (arr.length >= num) {
      return arr.slice(0, num);
    }
  
    const newNum = arr.at(-1) + arr.at(-2);
    arr.push(newNum);
    return fibsRec(num, arr);
  }
console.log("Fibonacci without recursion:")
console.log("1: " + fibs(1));
console.log("13: " + fibs(13));
console.log("0: " + fibs(0));
console.log("8: " + fibs(8));

console.log();


console.log("Fibonacci with recursion:")
console.log("1: " + fibsRec(1));
console.log("13: " + fibsRec(13));
console.log("0: " + fibsRec(0));
console.log("8: " + fibsRec(8));


