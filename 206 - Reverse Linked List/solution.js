/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while(curr) {
        // setting the next element in next node
        let next = curr.next;
        // setting the next of curr to previous node
        curr.next = prev;
        // setting the prev node as the current
        prev = curr;
        // setting the current as next
        curr = next;
    }

    // Lastly the prev would point to the last node
    return prev;
};

// Using recurssion
var recurssive = function(head){
    const reverse = (head) => {
        if(head == null || head.next == null){
            return head;
        }

        let newHead = reverse(head.next);
        let front = head.next;
        front.next = head;
        head.next = null;
        return newHead;

    }

    return reverse(head);
}


