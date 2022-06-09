var isPrefixString = function(s, words) {
   if (s === words[0]) return true
   let i = 0
   let prefix = words[0]
   while (i < words.length){
      if (s === prefix) {
         return true
      } else {
         i++
         prefix = prefix.concat(words[i])
      }
   }
   return false
};

console.log(isPrefixString('z', ["z"]))