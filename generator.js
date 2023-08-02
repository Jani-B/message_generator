
//this generator will work as following. 
//Generator will choose 2 words from either Group1 (wordsGroup1 + secondWordsGroup1) 
//or from Group2 (wordsGroup2 + secondWordsGroup2)
//in the Group2 there are few items in array that will always be paired with specific item from the other array.

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
    //please add additional sentences at the beginning of the array. see line 64 for reason.
];

const chooseGroup = () => { //create a random number between 0-1 to see which group to choose
    let randomNumber = Math.floor(Math.random() * 2);
    return randomNumber
};

//console.log(chooseGroup());

let randomSentence1 = [];
const createSentence = () => { //random generator for the wordsGroups
    if(chooseGroup() === 0) { //this will choose the WordsGroup1 if the chooseGroup is 0
        let randomNumber = Math.floor(Math.random() * wordsGroup1.length);
        let randomWord1 = wordsGroup1[randomNumber];
        let randomNumber2 = Math.floor(Math.random() * secondWordsGroup1.length);
        let randomWord2 = secondWordsGroup1[randomNumber2];
        randomSentence1.push(randomWord1, randomWord2);
        return randomSentence1
    }else { //if chooseGroup is 1 this will part of the function will start.
        let randomNumber = Math.floor(Math.random() * wordsGroup2.length);
        let randomWord1 = wordsGroup2[randomNumber];
            if (randomWord1 === 'I love you'){ //if the randomWord1 is I love you. this part of function will work
                let chooseWord = secondWordsGroup2[secondWordsGroup2.length -2]; //we will have specific end of sentence for this
                randomSentence1.push(randomWord1, chooseWord);
                return randomSentence1
            } else if (randomWord1 === 'All your base are'){ //this part will start if randomWord1 is 'All your base are'
                let chooseWord = secondWordsGroup2[secondWordsGroup2.length -1]; //we will have speific end of sencence for this
                randomSentence1.push(randomWord1, chooseWord);
                return randomSentence1
            } else {
        let randomNumber2 = Math.floor(Math.random() * (secondWordsGroup2.length - 2)); 
        //this randomnumber2 will not work if there is additional words at the END of the array.
        let randomWord2 = secondWordsGroup2[randomNumber2];
        randomSentence1.push(randomWord1, randomWord2);
        return randomSentence1
        }
    };
};

const createText = () => { //create text for output
    console.log(`Random Message for you:   ${randomSentence1.join(' ')}`);
};

createText(createSentence()); //lets see the results


