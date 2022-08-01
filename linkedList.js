class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);

a.next = b;
b.next = c;
c.next = d;

const printList = (head) => {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
};

const insertIndex = (head, value, index) => {
    if (index === null) {
        const newHead = new Node(value);
        newHead.next = head;
        return newHead;
    }

    let count = 0;
    let current = head;
    while (current !== null) {
        if (count === index - 1) {
            const next = current.next;
            current.next = new Node(value);
            current.next.next = next;
        }
        count += 1;
        current = current.next;
    }
    return head;
};

const findeIndex = (head, index) => {
    let current = head;
    let count = 0;
    while (current !== null) {
        if (count === index) return current.val;
        count += 1;
        current = current.next;
    }
    return null;
};

const reverseList = (head) => {
    let prev = null;
    let current = head;
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

const zipperList = (head1, head2) => {
    let tail = head1;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;

    while (current1 !== null && current2 !== null) {
        if (count % 2 === 0) {
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }
        tail = tail.next;
        count += 1;
    }
    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;
    return head1;
};

console.log(printList(a));
console.log(insertIndex(a, 5, null));
console.log(findeIndex(a, 3));
console.log(reverseList(a));
console.log(zipperList(a, b));
