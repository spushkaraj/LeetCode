/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];

    const compute = (ind, nums) => {
        if(ind == nums.length){
            result.push([...nums]);
            return;
        }

        let i = ind;
        while(i < nums.length){
            [nums[ind], nums[i]] = [nums[i], nums[ind]];
            compute(ind+1, nums);
            [nums[ind], nums[i]] = [nums[i], nums[ind]];
            i++;
        }
    }

    compute(0, nums);
    return result;
};