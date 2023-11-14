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