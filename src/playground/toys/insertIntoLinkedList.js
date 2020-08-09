/*

Insert a number in order in a cyclic, ordered, single linked list.

insert(Node node, int value): Node
 Node
   int value;
   Node next;

1 > 3  (3 links back to 1) insert(node, 1) --> 1 > 1 > 3 (3 linked back to 1) 
    ^

1 > 2 > 3 > 4 (4 linked back to 1) insert(node_pointing_to_1, 6)  --> 1 > 2 > 3 > 4 > 6 (6 linked back to 1)
^
1 > 2 > 3 > 4  insert(3,6) --> 1 > 2 > 3 > 4 > 6
        ^
  
1 > 1 > 1 insert(1, 2) --> 1 > 1 > 1 > 2
^


1 > 2 > 4> (4 links back to 1) insert(4, 3) --> 1 > 2 > 3 > 4 
                               insert(4,1) --> 1 > 1 > 2> 4

*/
//head
//search for node to start inserting from

/**
* Node node
* int value
* return new list
*/
function insert(node, value) {
  if (!node){
    const result = new Node(value, null);
    result.next = result;
    return result;
  }
  
  if (node.next === node) {
      const tempNode = new Node(value, node);
      node.next = tempNode;
    return node;
  }
  // 1 > 2 > 3* > 4 (insert (3, 1)) // value=1
  let prevNode = node; //4
  let currentNode = node.next; //1
  while (currentNode != node) {
    if (value === currentNode.value){
    }
        
    if (value <= currentNode.value && value >= prevNode.value){
      let tempNode = newNode(value, currentNode);
      prevNode.next = tempNode;
      return node;
    }
    
    if (prevNode.value > currentNode.value && value > prevNode.value){
      const tempNode = new Node(value, currentNode);
      prevNode.next = tempNode;
      return node;
    }
    
    if (value <= prevNode.value){
      const tempNode = new Node(value, currentNode);
      prevNode
    }
    
    prevNode = currentNode;
    currentNode = currentNode.next;
  }
  
  
  let tempNode = new Node(value, node);
  prevNode.next = tempNode;
  
  
  return node;
}

function insertNode(prevNode, value, nextNode){
  ////
}