var frequencySort = function(s) {
  let count = {}; 
  for (let i of s) {
    if (count[i]) {
      count[i]++; 
    } else {
      count[i] = 1; 
    }
  }
  let finalStr = '';
  let sorted = Object.keys(count).sort((a, b) => count[b] - count[a]); 
  for (let i of sorted) {
    for (let j = 0; j < count[i]; j++) {
      finalStr += i; 
    }
  }
  return finalStr

};

console.log(frequencySort("Aabb")); 