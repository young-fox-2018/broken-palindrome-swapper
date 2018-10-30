/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  for (var i = 0; i < str.length; i++) {
    let newStr = '';
    //debugger
    for (var j = 0; j < str.length; j++) {
      //debugger
      if (i === j && j !== str.length - 1) {
        //debugger
        newStr += str[j + 1];
        newStr += str[j];
        j++;
      } else {
        //debugger
        newStr += str[j];
      }
    }
    //debugger
    if (isPalindrome(newStr)) return true;
    //debugger
  }
  //debugger
  return false;
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  //debugger
  if (str.split('').reverse().join('') === str) return true;
  //debugger
  return false;

}

//debugger
console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
