var firstUniqChar = function(s) {
  let characters = s.split(''); 
  let charsArray = []; 
  characters.forEach(char => {
    if (s.indexOf(char) === s.lastIndexOf(char)) {
      charsArray.push(s.indexOf(char))
    }
  }); 
  if (charsArray.length === 0) {
    return -1; 
  } else {
    return charsArray[0]; 
  }
};

console.log(firstUniqChar("leetcode")); 