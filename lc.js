const divisorSubstrings = (num, k) => {
    let currNum = []
    let count = 0
    let numsArr = num.toString().split('')
    for (let i = 0; i < numsArr.length; i++) {
        currNum.push(numsArr[i])
        let current = currNum.join('')
        if (i >= k - 1) {
            if (num % current === 0) count++
            currNum.shift()   
         }
      }
   return count
};

console.log(divisorSubstrings(430043, 2));