// DSA in Typescript

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

//Binary Search -- Node Insertion Problem
//You are given a binary search tree with the following structure:
/*
10
/  \
5    15
/ \     \
3   7     20
*/
const InsertNode = (root, key) => {
  // we will check if root is empty we return null
  // We first make a Utility function for inserting the node
  if (root === null) {
    return new Node(key);
  }
  // checks if this is a duplicate
  if (root.key == key) {
    return root;
  }

  if (key < root.key) {
    // console.log('this is root.key', root.key);
    root.left = InsertNode(root.left, key);
  } else if (key > root.key) {
    root.right = InsertNode(root.right, key);
  }
  // console.log("this is root.left" , root.left)
  // console.log("this is root.right" , root.right)
  // console.log("this is root" , root)
  return root;
};

// A utility function to do inorder
// tree traversal
function inorder(root) {
  if (root !== null) {
    inorder(root.left);
    console.log(root.key + ' ');
    inorder(root.right);
  }
}

// Uncommnent for sample Use Case
// let root = new Node(10);
// console.log('initial root', root);
// root = InsertNode(root, 20);
// console.log('inserted Node', root);
// root = InsertNode(root, 15);
// root = InsertNode(root, 7);
// root = InsertNode(root, 5);
// root = InsertNode(root, 3);
// root = InsertNode(root, 13);

// inorder(root);

// ------------------------------------------------------------------------------------------------------------

// implement a delete node for this  tree and an add node aswell

/*    50
     /  \
    25    60
   / \   / \
  3  26 30  67 */

//instantiate our class here
class Problem2 {
  constructor(Prob2key) {
    this.Prob2key = Prob2key;
    this.Prob2left = null;
    this.Prob2right = null;
  }
}

// utility function for add ing a node
const insertNodeProb2 = (Prob2root, Prob2key) => {
  // add a new key if its null
  if (Prob2root == null) {
    return new Problem2(Prob2key);
  }
  if (Prob2root.Prob2key == Prob2key) {
    return Prob2root;
  }

  if (Prob2root.Prob2key < Prob2key) {
    Prob2root.Prob2left = insertNodeProb2(Prob2root.Prob2left, Prob2key);
  } else if (Prob2root.Prob2key > Prob2key) {
    Prob2root.Prob2right = insertNodeProb2(Prob2root.Prob2right, Prob2key);
  }

  return Prob2root;
};

//utility function for traversal / printing

const ShowBST = (Prob2root) => {
  if (Prob2root !== null) {
    ShowBST(Prob2root.Prob2left);
    console.log(Prob2root.Prob2key + ' ');
    ShowBST(Prob2root.Prob2right);
  }
};

let Prob2root = new Problem2(50);
Prob2root = insertNodeProb2(Prob2root, 25);
Prob2root = insertNodeProb2(Prob2root, 3);
Prob2root = insertNodeProb2(Prob2root, 26);
Prob2root = insertNodeProb2(Prob2root, 30);
Prob2root = insertNodeProb2(Prob2root, 60);
Prob2root = insertNodeProb2(Prob2root, 67);

ShowBST(Prob2root);
