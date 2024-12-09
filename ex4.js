var text = 'The quick brown fox.';

function countVowels(text) {

    var uniformText = text.toLowerCase();
    let countV = 0;


    for (let i = 0; i < uniformText.length; i++) {

        let char = uniformText.charAt(i);

        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {

            countV++;
        }

    }

    return countV;

}


console.log(countVowels(text));