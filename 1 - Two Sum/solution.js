/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 */
var twoSum = function(nums, target) {
   
//     Brute Force Approach    
    // for(let i=0; i<nums.length; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         if(i!==j && nums[i]+nums[j] === target){
    //             arr.push(i,j);
    //             return arr;
    //         }
    //     }
    // }
    
//     Using Hashmap
    const subMap = new Map();    

    for(let i=0; i<nums.length; i++){
        const diff = target - nums[i];
        if(subMap.has(diff)){
            return [subMap.get(diff), i];
        }

        subMap.set(nums[i], i);
    }
};