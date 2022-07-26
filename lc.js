var reverseString = function(s) {
   let queue = []
   for (let i = 0; i < s.length; i++) {
       queue.unshift(s[i])
   }
   return queue.join('')
};

console.log(reverseString('racecar'));
