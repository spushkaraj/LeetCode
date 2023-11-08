/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Time Complexity - O(n log k)
 * Space Complexity - O(n)
 */
var topKFrequent = function(nums, k) {  
    const map = new Map();
    let arr = new Array(nums.length+1).fill([]);
  
    let result = [];
  
    for(num of nums){
      let val = map.get(num) || 0;
      val++;
      map.set(num, val);
    }
  
  
    [...map.entries()].forEach((entry) => {
      const occur = entry[1];
      const val =[...arr[occur], entry[0]];
      arr[occur] =  val;
    });
  
    for(let i=arr.length-1; i>0; i--){
      if(result.length == k) break;
  
      if(arr[i].length > 0){ 
        result.push(...arr[i])
      }
    }
  
    return result;
   
  };