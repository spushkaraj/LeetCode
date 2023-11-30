/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    const arr = [...Array(n).keys()].map(i => i+1);
  
    let v = 0;
    while(arr.length > 1){
        v = (v+k-1)%arr.length;
        arr.splice(v,1)
  
    }
  
    return arr[0];
  };