class Solution {
    public boolean containsDuplicate(int[] nums) {
        
        // --------------------- Using Sorting ---------------------
        // Arrays.sort(nums);

        // for(int i=1; i<nums.length; i++){
        //     if(nums[i] == nums[i-1]){
        //         return true;
        //     }
        // }

        // return false;

        // --------------------- Using Hashset ---------------------
        HashSet<Integer> set = new HashSet<>();

        for(int num: nums){
            if(set.contains(num)){
                return true;
            }
            set.add(num);
        }

        return false;
    }
}