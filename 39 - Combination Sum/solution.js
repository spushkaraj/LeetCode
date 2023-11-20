/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 *
 * Time Complexity - O((2^k) . k)
 * Space Complexity - O(k .x)
 * where x is number of combinations
 * 
 */
var combinationSum = function(candidates, target) {
    let result = [];

    const helper = (nums, target, ind, temp) => {
        if(ind == nums.length){
            if(target == 0){
                result.push([...temp]);
            }
            return;
        }

        if(nums[ind] <= target){
            temp.push(nums[ind]);
            helper(nums, target-nums[ind], ind, temp);
            temp.pop();
        }

        helper(nums, target, ind+1, temp);
    }

    helper(candidates, target, 0, []);
    return result;
};