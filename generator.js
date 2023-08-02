const wordsGroup1 = ['Did you know that', 'Can you belive that'];
const secondWordsGroup1 = [
    'Scotland chose the unicorn as its national animal.', 
    'Avocados are not vegetables.',
    "Shrimp's heart is in its head.",
    'Sloths are pretty good in water. They can even hold their breath longer than dolphins.',
    'First airplane flought on 17.12.1903',
    'Venus spins clockwise.',
    'The american Statue of Liberty was once upon a time used as a lighthouse',
    'Octopuses have three hearts'
];

const wordsGroup2 = [
    'I think we should',
    'I think we should not',
    'Do you think we should',
    'I love you', //only together with second to last from secondWordsGroup2
    'All your base are' //only together with the last from secondwordsGroup2
];

const secondWordsGroup2 = [
    'have a date',
    'go to cinema',
    'go to our separate ways from here',
    'go and say hi to John',
    'log off',
    'go to sleep',
    'make life more fun',
    'take what is rightfully ours',
    'take this base',
    '... not you! the one behind you!', //only together with the second to last from wordsGroup2
    'belong to us!' //only together with the last from wordsGroup2
];

const chooseGroup = () => { //create a random number between 0-1 to see which group to choose
    let randomNumber = Math.floor(Math.random() * 2);
    return randomNumber
};

let randomSentence1 = [];
const randomForGroup1 = () => { //random generator for the wordsGroup1
    let randomNumber = Math.floor(Math.random() * wordsGroup1.length);
    let randomWord1 = wordsGroup1[randomNumber];
    let randomNumber2 = Math.floor(Math.random() * secondWordsGroup1.length);
    let randomWord2 = secondWordsGroup1[randomNumber2];
    randomSentence1.push(randomWord1, randomWord2);
    return randomSentence1
};

const createText = () => {
    console.log(`${randomForGroup1()}`);
};

createText();

//console.log(wordsGroup1);
//console.log(randomForGroup1());

