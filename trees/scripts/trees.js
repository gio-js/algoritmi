class node {
  constructor(parent, value) {
    this.value = value;
    this.parent = null;
    this.firstChild = null;
    this.rightSibling = null;
  }
}

class tree {
  constructor(value) {
    this.root = new node(null, value);
  }

  radice() {
    return this.root;
  }

  scriviNodo(parentNode, value) {
    if (parentNode.value >= value) {
      if (parentNode.firstChild == null) {
        parentNode.firstChild = new node(parentNode, value);
      } else {
        this.scriviNodo(parentNode.firstChild, value);
      }
    } else {
      if (parentNode.firstChild.rightSibling == null) {
        parentNode.firstChild.rightSibling = new node(parentNode, value);
      } else {
        this.scriviNodo(parentNode.firstChild.rightSibling, value);
      }
    }
  }

  insNodo(value) {
    this.scriviNodo(this.root, value);
  }

  padre(node) {
    return node.parent;
  }

  primoFiglio(nodo) {
    return nodo.firstChild;
  }

  succFratello(nodo) {
    return nodo.rightSibling;
  }

  foglia(node) {
    return node.firstChild == null;
  }

  fineFratelli(node) {
    return node == null;
  }

  alberoVuoto() {
    return this.root.firstChild == null;
  }

  /* todo
  insSottoAlbero(node1, node2, addingTree) {
      if (node1 != node2) {

      } else {
          node1.firstChild = addingTree.root;
      }
  }
  */

  invisita(node, callbackFunction) {
    if (this.foglia(node)) {
      callbackFunction(node);
    } else {
      let primoFiglio = this.primoFiglio(node);
      this.invisita(primoFiglio, callbackFunction);

      callbackFunction(node);

      let succFratello = this.succFratello(primoFiglio);
      while (!this.fineFratelli(succFratello)) {
        this.invisita(succFratello, callbackFunction);
        succFratello = this.succFratello(succFratello);
      }
    }
  }

  previsita(node, callbackFunction) {
    callbackFunction(node);
    if (!this.foglia(node)) {
        let child = this.primoFiglio(node);

        while(!this.fineFratelli(child)) {
            this.previsita(child, callbackFunction);
            child = this.succFratello(child);
        }
    }
  }

  postvisita(node, callbackFunction) {
    if (!this.foglia(node)) {
      let child = this.primoFiglio(node);
      while (!this.fineFratelli(child)) {
        this.postvisita(child, callbackFunction);
        child = this.succFratello(child);
      }
    }
    callbackFunction(node);
  }

  consoleOut(node) {
    if (node == null) return;

    console.log(node.value);
    this.consoleOut(node.firstChild);
    this.consoleOut(node.rightSibling);
  }
}

window.sampleTree = (function() {
  let t = new tree(30);
  t.insNodo(15);
  t.insNodo(8);
  t.insNodo(25);
  t.insNodo(35);
  t.insNodo(32);
  t.insNodo(40);
  t.insNodo(23);
  t.insNodo(28);
  return t;
})();

// previsita

// invisita