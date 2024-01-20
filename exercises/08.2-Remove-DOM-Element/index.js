// Your code here
let ListNode = document.querySelector("#parentLi");
let childs = ListNode.childNodes;
console.log(childs);
let secondChild = childs[3];
console.log(secondChild.firstChild.data);
ListNode.removeChild(secondChild);
console.log(childs);