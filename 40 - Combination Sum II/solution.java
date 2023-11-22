import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {

    public void helper(int[] nums, int target, int ind, List<Integer> arr, List<List<Integer>> result){
        if(target == 0){
            result.add(new ArrayList<>(arr));
            return;
        }

        for(int i=ind; i<nums.length; i++){
            if(i>ind && nums[i] == nums[i-1]) continue;
            if(nums[i] > target) break;

            arr.add(nums[i]);
            helper(nums, target-nums[i], i+1, arr, result);
            arr.remove(arr.size()-1);
        }
    }

    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();

        Arrays.sort(candidates);

        helper(candidates, target, 0, new ArrayList<>(), result);

        return result;
    }
}