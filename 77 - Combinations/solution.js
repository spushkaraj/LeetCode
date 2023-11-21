/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];

    const helper = (num, temp) => {

        if(temp.length == k){
            result.push([...temp]);
            return;
        }
        
        let i = num;
        while(i<=n){
            temp.push(i);
            helper(i+1, temp);
            temp.pop();
            i++;
        }
    }

    helper(1, []);
    return result;
};