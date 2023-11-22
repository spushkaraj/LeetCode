/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 * 
 * Two-Pass solution  
 */
var sortColors = function(nums) {
    let [r, w, b] = [0, 0, 0];

    for(let val of nums){
        switch(val){
            case 0: r++;
                    break;
            case 1: w++;
                    break;
            case 2: b++;
                    break;
        }
    }

    for(let i=0; i<nums.length; i++){
        if(r !== 0){
            nums[i] = 0;
            r--;
        } else if(r==0 && w !== 0){
            nums[i] = 1;
            w--;
        } else if(r==0 && w==0 && b!==0){
            nums[i] = 2;
            b--;
        }
    }
};


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 * 
 * One-Pass solution - Dutch National Flag algorithm
 * 
 * The idea behind the algorithm is to keep all the 0s before the low pointer, 
 * all the 2s after the high pointer, and all the 1s between the low and high 
 * pointers. The algorithm moves the mid pointer through the array, comparing 
 * the value at each position with 1. If the value is 0, the element is swapped 
 * with the element at the low pointer, and the low and mid pointers are 
 * incremented. If the value is 2, the element is swapped with the element at 
 * the high pointer, and the high pointer is decremented. If the value is 1, the
 * mid pointer is simply incremented.
 */
var sortColors = function(nums) {
    let [l, m, h] = [0, 0, nums.length-1];

    while(m <= h){
        if(nums[m] == 0){
            nums[m] = nums[l];
            nums[l] = 0;
            l++;
            m++;
        }else if(nums[m] == 1){
            m++;
        } else{
            nums[m] = nums[h];
            nums[h] = 2;
            h--;
        }
    }
};