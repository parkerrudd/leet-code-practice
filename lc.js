var mostFrequent = function(nums, key) {
  let count = []; 
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] === key) count.push(nums[i]); 
  }
  let obj = {}; 
  for (let i of count) {
    if (obj[i]) {
      obj[i]++
    } else {
      obj[i] = 1
    }
  }
  let sorted = Object.keys(obj).sort((a, b) => obj[b] - obj[a]); 
  return sorted[0];
};

console.log(mostFrequent([2,2,2,2,3], 2)); 