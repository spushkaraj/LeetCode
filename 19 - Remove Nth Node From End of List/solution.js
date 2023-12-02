/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // let [length, curr] = [0, head];

    // while(curr){
    //     length++;
    //     curr = curr.next;
    // }

    // let [idx, prev, curr1] = [0, null, head];
    // while(idx < (length-n)){
    //     prev = curr1
    //     curr1 = curr1.next;
    //     idx++;
    // }
    
    // if(curr1 == head) {
    //     head = head.next || null;
    // } else {
    //     prev.next = curr1.next
    // }

    // return head;

    // FOLLOW UP

    let node = new ListNode(0, head);

    let left = node;
    let right = head;

    while(n>0 && right){
        right = right.next;;
        n--;
    }

    // incase where n is the length of the list, delete head case
    if(!right) return head.next;

    while(right){
        left = left.next;
        right = right.next;
    }

    left.next = left.next.next;

    return node.next;
};