/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 
*/


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
    let returnValue = [];
    let returnSet = new Set(returnValue);
    let minimumLength = Math.min(str1.length, str2.length);
    
    const isDivisible = (str, subStr) => {
        return subStr.repeat(str.length / subStr.length) === str;
    };
    
 
    for (let i = minimumLength; i > 0; i--) {
        // Take substring of the current length 'i'
        let candidate = str1.substring(0, i);
        
       
        if (str1.length % i === 0 && str2.length % i === 0 && 
            isDivisible(str1, candidate) && isDivisible(str2, candidate)) {
            returnSet.add(candidate);
            break;  
        }
    }

 
    if (returnSet.size === 0) {
        return "";
    }


    return [...returnSet].join("");   
};

console.log(gcdOfStrings())