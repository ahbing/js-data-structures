function DoublyLinkedList() {
  this._head = null;
  this._tail = null;
  this._length = 0;
}

DoublyLinkedList.prototype = {
  constructor: DoublyLinkedList,
  add: function(data) {
    var node = {
      data: data,
      prev: null,
      next: null
    };
    var current;
    if (!this._head) {
      this._head = this._tail = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
    this._length++;
  },
  item: function(index) {
    if (index === 0) {
      return this._head.data;
    }
    if (index === this._length-1) {
      return this._tail.data;
    }
    if (index > -1 && index < this._length) {
      var current = this._head;
      var id = 0;
      while(id++ < index) {
        current = current.next;
      }
      return current.data;
    } else {
      return null;
    }
  },
  remove: function(index) {
    if (index > -1 && index < this._length) {
      var current;
      if (index === 0) {
        current = this._head;
        this._head = this._head.next;
        if (this._head) {
          this._head.prev = null
        } else {
          this._tail = null;
        }
      } else if (index === this._length - 1) {
        current = this._tail;
        this._tail = current.prev;
        this._tail.next = null;
      } else {
        current = this._head;
        var id = 0;
        var previous;
        while (id++ < index) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      this._length--;
      return current.data;
    } else {
      return null;
    }
  }
}

var myDoubleLinked = new DoublyLinkedList();

myDoubleLinked.add(1)
myDoubleLinked.add(2)
myDoubleLinked.add(3)
console.log(myDoubleLinked.item(2));
console.log(myDoubleLinked.item(1));
console.log(myDoubleLinked.remove(2));
console.log(myDoubleLinked.remove(1));

