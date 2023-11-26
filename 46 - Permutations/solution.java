import java.util.ArrayList;
import java.util.List;

class Solution {
    public void swap(int[] nums, int a, int b){
        int temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
 
    public void compute(int ind, int[] nums, List<List<Integer>> ans){
        if(ind == nums.length){
            List<Integer> list = new ArrayList<>();
            for(int n: nums){
                list.add(n);
            }
            ans.add(list);
            return;
        }

        int i = ind;
        while(i<nums.length){
            swap(nums, ind, i);
            compute(ind+1, nums, ans);
            swap(nums, ind, i);
            i++;
        }
    }

    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();

        compute(0, nums, result);

        return result;
    }
}