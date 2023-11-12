/*
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 */

public class solution {
    public boolean isAnagram(String s, String t) {
        int[] arr = new int[26];

        for(char ch: s.toCharArray()){
            arr[ch - 'a']++;
        }
        
        for(char ch: t.toCharArray()){
            arr[ch - 'a']--;
        }

        for(int val: arr){
            if(val != 0){
                return false;
            }
        }

        return true;
    }
}
