function Linkedlist () {
  this._head = null;
  this._length = 0;
}

Linkedlist.prototype = {
  constructor : Linkedlist,
  add: function(data) {
    var node = {
      data: data,
      next: null
    };
    var current;
    if (!this._head) {
      this._head = node
    } else {
      current = this._head;
      while (current.next) {
        current = current.next
      }
      current.next = node;
    }
    this._length++;
  },
  item: function(index) {
    if (index > -1 && index < this._length) {
      var current = this._head;
      var id = 0;
      while (id++ < index) {
        current = current.next;
      }
      return current.data;
    } else {
      return null;
    }
  },
  remove: function(index) {
    if (index > -1 && index <= this._length) {
      var current = this._head;
      var previous;
      var id = 0;
      if (index === 0) {
        this._head = current.next;
      } else {
        while(id++ < index) {
          previous = current;
          current = current.next
        }
        previous.next = current.next;
      }
      this._length--;
      return current.data;
    } else {
      return null;
    }
  }
};

var myList = new Linkedlist();
myList.add(1)
myList.add(2)
myList.add(3)
console.log(myList.item(1)) // 2
console.log(myList.item(2)) // 3
console.log(myList.remove(1)) // 2
console.log(myList.item(1)) // 3