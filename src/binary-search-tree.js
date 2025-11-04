const { NotImplementedError } = require('../lib/errors');
const {ListNode} = require('../extensions/list-node')
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(value){
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    this._root = this._addNode(this._root, data);
  }
  
  _addNode(node, data) {
    if (node === null) {
      return new Node(data);
    }
    
    if (data < node.data) {
      node.left = this._addNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._addNode(node.right, data);
    }
    
    return node;
  }

  has(data) {
    return this._hasNode(this._root, data);
  }

  _hasNode(node, data) {
    if (node === null) {
      return false;
    }
    
    if (data === node.data) {
      return true;
    }
    
    if (data < node.data) {
      return this._hasNode(node.left, data);
    } else {
      return this._hasNode(node.right, data);
    }
  }

  find( data ) {
    return this._findNode(this._root, data);
  }
  _findNode(node,data){
    if(node === null){
      return null;
    }
    if(data === node.data){
      return node;
    }
    if(data < node.data){
      return this._findNode(node.left ,data)
    }else{
      return this._findNode(node.right ,data)
    }
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }
  
  _removeNode(node, data) {
    if (!node) return null;
  
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    }
  
    if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    }
  
    if (!node.left && !node.right) return null;
    if (!node.left) return node.right;
    if (!node.right) return node.left;
  
    let min = node.right;
    while (min.left) min = min.left;
  
    node.data = min.data;
    node.right = this._removeNode(node.right, min.data);
    return node;
  }
  
  
  

  min() {
      if (this._root === null){
        return null;
      }
      return this._findMin(this._root).data
      }
        _findMin(node){
          while(node.left !== null){
            node = node.left
          }
          return node;
        }

  max() {
      if (this._root === null){
        return null;
      }
      return this._findMax(this._root).data
      }
        _findMax(node){
          while(node.right != null){
            node = node.right
          }
          return node;
        }

}

module.exports = {
  BinarySearchTree
};