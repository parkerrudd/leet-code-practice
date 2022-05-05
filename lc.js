var targetIndices = function(nums, target) {
  let sorted = nums.sort((a, b) => a - b); 
  let res = []; 
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === target) {
      res.push(i)
    }
  }
  return res; 
};

console.log(targetIndices([1,2,5,2,3], 2)); 