const checkPalindrome = (word) =>{
    const re = /[\W_]/g;

    //Removes all special characters 
    let lowerNormWord = word.toLowerCase().replace(re, '');
    console.log(typeof(lowerNormWord))
    //Lower cases and replaces special characters with an empty string
    let reverseString = lowerNormWord.split('').reverse().join('');

    return lowerNormWord === reverseString;
}

console.log(checkPalindrome("ooo"))




