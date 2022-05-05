var arrayRankTransform = function(arr) {
  //sort arr from in increasing order
  const sorted = [...arr].sort((a, b) => a - b);
  //remove duplicate values from array 
  const finalSort = []; 
  for (let i = 0; i < sorted.length; i++) {
    if (!finalSort.includes(sorted[i])) {
      finalSort.push(sorted[i])
    }
  }
  //find the index of each value from arr in finalSort && add one to begin rank at 1
  return arr.map((x) => finalSort.indexOf(x) + 1);
};

console.log(arrayRankTransform([40,10,20,30,10])); 