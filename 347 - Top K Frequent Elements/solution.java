import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();

        for(int num: nums){
            map.put(num, map.getOrDefault(num, 0)+1);
        }

        List<Integer> list = new ArrayList<>(map.keySet());
        list.sort((a, b) -> map.get(b) - map.get(a)); // sort in descending order

        int[] result = new int[k];
        for(int i=0; i<k; i++){
            result[i] = list.get(i);
        }

        return result;
    }

    // Using Priority Queue
    public int[] topKFrequentWithPQ(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();

        for(int num: nums){
            map.put(num, map.getOrDefault(num, 0)+1);
        }

        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a,b) -> b[1] - a[1]);

        for(int key: map.keySet()){
            maxHeap.add(new int[]{key, map.get(key)});
        }

        int[] result = new int[k];
        int ind = 0;
        while(k>0){
            int[] curr = maxHeap.remove();
            result[ind++] = curr[0];
            k--;
        }

        return result;
    }
}
