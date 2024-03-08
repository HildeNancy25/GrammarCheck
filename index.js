let story = "i joid the she can code bootcamp yeapy in 2024 on the 7th february";
let storyWords = story.split(' ');

let unnecessaryWord = 'bootcamp';
let misspelledWord = 'joid';
let badWord = 'yeapy';

console.log(storyWords);
let count = 0; 

storyWords = storyWords.filter((filt) => filt !== unnecessaryWord);
console.log(storyWords.join(' '));

let storyW = storyWords.map(mspw => {
    if (mspw === misspelledWord){
        return 'joined';
    } else {
        return mspw
    }
});

storyWords.forEach(counting);
function counting () {
    count ++;
}   

let badWordIndex = storyWords.findIndex(thatWord =>{
    return thatWord === badWord;
});

storyW[6] = 'really';

let checkLength = storyW.every((check) => check.length < 7);

for (let j=0; j<storyW.length; j++){
    if (storyW[j].length > 7){
        storyW[j] = 'Feb';
    }
}

let changeLength = storyW.join(' ');

// console.log(storyWords.join(' '));
// console.log(storyW.join(' '));
console.log(count);
console.log(badWordIndex);
// console.log(storyW.join(' '));
console.log(checkLength);
console.log(changeLength);