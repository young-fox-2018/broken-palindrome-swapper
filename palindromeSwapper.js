/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  if(isPalindrome(str)){
    return true
  }
  else{
    let newStr = '';
    for (var i = 0; i < str.length; i++) {
      for (var j = 0; j < str.length; j++) {
        debugger
        if (i === j) {
          j++;
          newStr += str[j];
          newStr += str[i];
        } else {
          newStr += str[j];
        }
      }
      debugger
      return isPalindrome(newStr);
    }
  }
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  if (str.split('').reverse().join("") === str) {
    return true;
  }
  else{
    return false;
  }
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // FALSE
console.log(palindromeSwapper('recacar')); // FALSE
