import java.util.ArrayList;
import java.util.List;

class Solution {

    public void helper(int num, int n, int k, List<Integer> temp, List<List<Integer>> result){

        if(temp.size() == k){
            result.add(new ArrayList<>(temp));
            return;
        }
        
        int i = num;
        while(i<=n){
            temp.add(i);
            helper(++i, n, k, temp, result);
            temp.remove(temp.size()-1);
        }
    }

    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> result = new ArrayList<>();

        helper(1, n, k, new ArrayList<>(), result);

        return result;    
    }
}