import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();

        solve(s, 0, new ArrayList<String>(), result);

        return result;
    }

    public void solve(String s, int ind, List<String> ans, List<List<String>> result){
        if(ind == s.length()){
            result.add(new ArrayList<>(ans));
            return;
        }

        for(int i=ind; i<s.length(); i++){
            if(isPalindrome(s, ind, i)){
                ans.add(s.substring(ind, i+1));
                solve(s, i+1, ans, result);
                ans.remove(ans.size()-1);
            }
        }
    }

    public boolean isPalindrome(String s, int start, int end){
        while(start<=end){
            if(s.charAt(start++) != s.charAt(end--)) return false;
        }

        return true;
    }
}