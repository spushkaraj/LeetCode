/**
 * @param {string[]} strs
 * @return {string[][]}
 * Time Complexity - O(n log n)
 * Space Complexity - O(n * k)
 */
var groupAnagrams = function(strs) {
    const anaMap = new Map();
    
    for(str of strs){
        const anas = str.split('').sort().join('');

        if(!anaMap.has(anas)){
            anaMap.set(anas, []);
        }

        anaMap.get(anas).push(str);
    }
    
    return Array.from(anaMap.values());
};