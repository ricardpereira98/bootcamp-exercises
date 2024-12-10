var string = 'bbbasdfgfdsabbbbb';

var text = string.toLowerCase();

function isPalindromeIterative(word) {

    let size = word.length;

    let end = size - 1;

    for (let i = 0; i < size / 2; i++, end--) {

        if (word.charAt(i) !== word.charAt(end)) {
            return false;
        }
    }
    return true;
}

console.log(isPalindromeIterative(text));


function isPalindromeRec(word) {


    let size = word.length;

    if (word === text) {
        startingIndex = 0
        endIndex = size - 1;

    } else if (size <= 1)
        return true;

    leftChar = word.charAt(startingIndex);
    rightChar = word.charAt(endIndex);

    if (size == 2)
        return leftChar === rightChar;

    else if (leftChar !== rightChar)
        return false;

    else {

        var newWord = word.substring(startingIndex + 1, endIndex);
        //console.log(newWord);

        size = newWord.length;
        endIndex = size - 1;
        //console.log(newWord.charAt(startingIndex));
        //console.log(newWord.charAt(endIndex));
        return isPalindromeRec(newWord);
    }

}
console.log(isPalindromeRec(text));