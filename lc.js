function checkMagazine(magazine, note) {
    let magazineArr = magazine.split(' ')
    let noteArr = note.split(' ')
    let magMap = {}
    let noteMap = {}
    for (let i = 0; i < magazineArr.length; i++) {
        if (!magMap[magazineArr[i]]) magMap[magazineArr[i]] = 0
        magMap[magazineArr[i]]++
    }
    for (let i = 0; i < noteArr.length; i++) {
        if (!noteMap[noteArr[i]]) noteMap[noteArr[i]] = 0
        noteMap[noteArr[i]]++
    }
    let searchedMag = Object.keys(magMap)
    let searchedNote = Object.keys(noteMap)
    for (let i = 0; i < searchedNote.length; i++) {
        if (searchedMag.indexOf(searchedNote[i]) === -1) return 'No'
        return 'Yes'
    } 
}

console.log(checkMagazine('give me one grand today night', 'give one grand today'))


