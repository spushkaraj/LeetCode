/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Time Complexity - O(n log n)
 * Space Complexity - O(n)
 */
var isAnagram = function(s, t) {
    
    // Using Sorting
    if(s.length != t.length){
        return false;
    }
    
    return s.split('').sort().join('') === t.split('').sort().join('') ? true : false;  
    
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length){
        return false;
    }

    let arr = Array(26).fill(0);

    for(let i=0; i<s.length; i++){
        arr[s.charCodeAt(i)-97]++;
        arr[t.charCodeAt(i)-97]--;
    }

    for(let val of arr){
        if(val !== 0){
            return false;
        }
    }

    return true;  
    
};