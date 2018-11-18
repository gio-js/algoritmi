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

      while (!this.fineFratelli(child)) {
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

  // todo
  maxProf(node) {}

  // todo
  distanzaNodo(nodo) {
    return -1;
  }

  consoleOut(node) {
    if (node == null) return;

    console.log(node.value);
    this.consoleOut(node.firstChild);
    this.consoleOut(node.rightSibling);
  }

  draw($, parentElement, node) {
    let $table = $("<table />");
    let $tr = $("<tr />");
    let $rootTd = $("<td />").html(node.value);

    $table.append($tr);
    $tr.append($rootTd);

    let sibling = node.rightSibling;
    while (sibling != null) {
      let $siblingElement = $("<td />").html(sibling.value);

      $tr.append($siblingElement);
      if (sibling.firstChild != null) {
        this.draw($, $siblingElement, sibling.firstChild);
      }

      sibling = sibling.rightSibling;
    }

    $(parentElement).append($table);
    if (node.firstChild != null) {
      this.draw($, $rootTd, node.firstChild);
    }
  }
}

// previsita

// invisita
