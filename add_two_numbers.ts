/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function generateListNode(values: number[]) {
    let listNode = null
    for (const val of values) {
        listNode = new ListNode(val, listNode)
    }
    return listNode;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const sum = []
    let carry = 0
    while (l1 || l2) {
        const l1Val = l1?.val || 0
        const l2Val = l2?.val || 0;
        const value = l1Val + l2Val + carry;
        sum.unshift(value % 10);
        carry = Math.floor(value / 10);
        l1 = l1?.next;
        l2 = l2?.next;
    }
    if (carry > 0) {
        sum.unshift(carry);
    }
    return generateListNode(sum);
}

function addTwoNumbersv2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode()
    let sum = dummy;
    let carry = 0
    while (l1 || l2) {
        const l1Val = l1?.val || 0
        const l2Val = l2?.val || 0;
        const value = l1Val + l2Val + carry;
        sum.next = new ListNode(value % 10);
        sum = sum.next;
        carry = Math.floor(value / 10);
        l1 = l1?.next;
        l2 = l2?.next;
    }
    if (carry > 0) {
        sum.next = new ListNode(carry);
        sum = sum.next;
    }
    return dummy.next;
}
//console.log("list node", JSON.stringify(generateListNode([1, 2, 3, 4, 5])))
//addTwoNumbers(generateListNode([9, 9, 9, 9, 9, 9, 9]), generateListNode([9, 9, 9, 9]))
console.log(addTwoNumbers(generateListNode([2, 4, 3]), generateListNode([5, 6, 4])))