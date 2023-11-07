/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 */
var containsDuplicate = function(nums) {
                
    const mset = new Set();
    
    for(num of nums){
        if(mset.has(num)){
            return true;
        }
        mset.add(num);
    }

    return false;
};


/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 */
var containsDuplicate = function(nums) {
                
    const mset = new Set(nums);
    
    return mset.size == nums.length ? false : true;
};


