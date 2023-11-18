/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * Time Complexity - O(n. (2^n))
 * Space Complexity - O(n)
 *  
 */
var subsets = function(nums) {
    let result = [];
    let subset = [];
    const dfs = (i) => {
        if(i>=nums.length){
            result.push([...subset]);
            return;
        }

        // taking the element
        subset.push(nums[i]);
        dfs(i+1);

        // not taking the element
        subset.pop();
        dfs(i+1);
    }

    dfs(0);
    return result;
};