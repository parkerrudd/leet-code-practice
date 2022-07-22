var isAnagram = function(s, t) {
   if (s.length !== t.length) return false
   const freq1 = {}
   const freq2 = {}
   const length = s.length
   for (let i = 0; i < length; i++) {
      if (!freq1[s[i]]) freq1[s[i]] = 0
      if (!freq2[t[i]]) freq2[t[i]] = 0
      freq1[s[i]]++
      freq2[t[i]]++
   }
   for (let ch in freq1) {
      if (freq1[ch] !== freq2[ch]) return false
   }
   return true
};

console.log(isAnagram('car', 'rac'))
