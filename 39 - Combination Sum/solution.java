import java.util.ArrayList;
import java.util.List;

class Solution {

    public void helper(int[] nums, int target, int ind, List<Integer> temp, List<List<Integer>> result){
        if(ind == nums.length){
            if(target == 0){
                result.add(new ArrayList<>(temp));
            }
            return;
        }

        if(nums[ind] <= target){
            temp.add(nums[ind]);
            helper(nums, target-nums[ind], ind, temp, result);
            temp.remove(temp.size()-1);
        }

        helper(nums, target, ind+1, temp, result);
    }

    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();

        helper(candidates, target, 0, new ArrayList<>(), result);

        return result;
    }
}