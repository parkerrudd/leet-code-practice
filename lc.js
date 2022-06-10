var isPrefixOfWord = function(sentence, searchWord) {
   const sentenceArr = sentence.split(' '); 
   for (let i in sentenceArr) {
       if (sentenceArr[i].includes(searchWord) && sentenceArr[i].slice(0, searchWord.length) === searchWord) {
           return sentenceArr.indexOf(sentenceArr[i]) + 1
       } 
   }
   return -1
};

console.log(isPrefixOfWord("i love eating burger", "burg"))