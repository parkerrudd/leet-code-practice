var isAnagram = function(s, t) {
   if (s.length !== t.length) return false
   let first = s.split('').sort().join('')
   let second = t.split('').sort().join('')
   let freq1 = {}
   let freq2 = {}
   for (let i in first) {
      if (freq1[first[i]]) {
         freq1[first[i]]++
      } else {
         freq1[first[i]] = 1
      }
   }
   for (let i in second) {
      if (freq2[second[i]]) {
         freq2[second[i]]++
      } else {
         freq2[second[i]] = 1
      }
   }
   return JSON.stringify(freq1) === JSON.stringify(freq2) 
};

console.log(isAnagram('car', 'rat'))
