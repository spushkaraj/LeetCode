/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a-b);
    const result = [];

    const helper = (ind, target, arr) => {
        if(target == 0){
            result.push([...arr]);
            return;
        }

        for(let i=ind; i<candidates.length; i++){
            if(i>ind && candidates[i]==candidates[i-1]) continue;
            if(candidates[i] > target) break;

            arr.push(candidates[i]);
            helper(i+1, target-candidates[i], arr);
            arr.pop();
        }
    }

    helper(0, target, []);
    return result;
};