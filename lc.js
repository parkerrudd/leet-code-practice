const sumTwoDArray = (arr) => {
   const flat = arr.flat()
   let sum = 0

   flat.forEach(element => {
      sum += element
   })

   return sum

}

console.log(sumTwoDArray([1, 3, [1, 4, 3]]));
