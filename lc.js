const firstAndLast = (nums, target) => {
   return [nums.indexOf(target), nums.lastIndexOf(target)]
}

console.log(firstAndLast([5,7,7,8,8,10], 8))
