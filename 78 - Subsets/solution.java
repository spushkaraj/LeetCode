import java.util.ArrayList;
import java.util.List;

/*
 * Time Complexity - O(n . (2^n))
 * Space Complexity - O(n)
 */
public class solution {

    public List<List<Integer>> subsets(int[] nums){

        List<List<Integer>> result = new ArrayList<>();
        helper(0, nums, new ArrayList<Integer>(), result);

        return result;
    }

    private void helper(int i, int[] nums, List<Integer> output, List<List<Integer>> result){

        // base case
        if(i >= nums.length){
            // adding the output to the result, as the output at the leaf node
            // on recursive tree
            result.add(output);
            return;
        }

        // selecting the element from nums at index i
        output.add(nums[i]);

        // calling recursivly to select next element
        helper(i+1, nums, output, result);
        
        // not selecting the element from nums at index i
        // it would be last element in output
        output.remove(output.size()-1);
        
        // calling recursivly to select next element
        helper(i+1, nums, output, result);

    }
}
