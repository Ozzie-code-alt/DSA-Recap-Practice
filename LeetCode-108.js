/*title: Convert an Array to Heightened BST - middle Value */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sortedArrayToBST = function (nums) {
  if (nums.length === 1) return new TreeNode(nums[0]);
  if (nums.length === 0) return null;

  let middleValue = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[middleValue]);
  //We Now Handle Left SubtreeHere
  let LeftTree = nums.slice(0, middleValue);
  root.left = sortedArrayToBST(LeftTree);

  //Again Right Subtree
  let RightTree = nums.slice(middleValue + 1, nums.length);
  root.right = sortedArrayToBST(RightTree);
  console.log(root);
  return root;
};

sortedArrayToBST([-10, -3, 0, 5, 9]); // => a root node representing this tree: [0,-3,9,-10,null,5]
