// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Examples
// Input: root = [1, null, 2, 3];
// Output: [1, 3, 2];


// Input: root = [];
// Output: [];


// Input: root = [1];
// Output: [1];


// Input: root = [1, 2];
// Output: [2, 1];


// Constraints

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100


var inorderTraversal = function (root) {
  let result = [];
  dfs(root);

  function dfs(root) {
    if (root != null) {
      dfs(root.left);
      result.push(root.val);
      dfs(root.right);
    }
  }

  return result;
};