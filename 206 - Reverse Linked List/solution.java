

class Solution {
    // Definition for singly-linked list.
    public class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }

    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while(curr != null){
            ListNode next = curr.next;
            curr.next = prev;
            
            prev = curr;
            curr = next;
        }

        // for recurssive
        // return recurssive(head);
        return prev;
    }

    // Using recurssion
    public ListNode recurssive(ListNode head){
        if(head==null || head.next == null){
            return head;
        }

        ListNode newHead = recurssive(head.next);

        ListNode front = head.next;
        front.next = head;
        head.next = null;
        
        return newHead;
    }
}