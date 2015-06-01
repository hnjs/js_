/*
The purpose is to implement the undoRedo function.

This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:

set(key, value) Assigns the value to the key. If the key does not exist, creates it.

get(key) Returns the value associated to the key.

del(key) removes the key from the object.

undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.

redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.

After set() or del() are called, there is nothing to redo.

All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.
*/

function undoRedo(object) {
  return {
      undoStack: [],
      redoStack: [],
    set: function(key, value) {
        this.undoStack.push({key:key, value:this.get(key), action:'set'});
        object[key] = value;
        this.redoStack = [];
      },
    get: function(key) {
         return object[key];
      },
    del: function(key) {
         this.undoStack.push({key:key, value:object[key], action:'del'});
         delete object[key];
        this.redoStack = [];
      },
    undo: function() {
      var lastOp;
      
      if (this.undoStack.length == 0) {throw new Error('No operation to undo');}

      lastOp = this.undoStack.pop();
      
      if (lastOp.action === 'set') {
        this.redoStack.push({key:lastOp.key, value:object[lastOp.key], action:'set'});
        object[lastOp.key] = lastOp.value;
      } else if (lastOp.action === 'del') {
        this.redoStack.push(lastOp);
        object[lastOp.key] = lastOp.value;
      }
      
     },
    redo: function() {
      var lastOp;

          if (this.redoStack.length == 0) throw new Error('No operation to redo');

          lastOp = this.redoStack.pop();

          if (lastOp.action === 'set') {
            this.undoStack.push({key:lastOp.key, value:object[lastOp.key], action:'set'});
        object[lastOp.key] = lastOp.value;
      } else if (lastOp.action === 'del') {
        this.undoStack.push(lastOp);
        delete object[lastOp.key];
        
      }
      }
  };
}