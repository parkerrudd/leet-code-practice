var frequencySort = function(nums) {
  let map = {}; 
  for (let i of nums) {
    if (map[i]) {
      map[i]++; 
    } else {
      map[i] = 1;
    }
  }
  let res = []; 
  let sorted = Object.keys(map).sort((a, b) => {
    if (map[a] === map[b]) {
      return b - a
    }
    return map[a] - map[b]; 
  }); 
  for (let i of sorted) {
    for (let j = 0; j < map[i]; j++) {
      res.push(i); 
    }
  }
  return res;
};

console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1])); 