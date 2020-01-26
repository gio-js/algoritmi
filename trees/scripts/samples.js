$(document).ready(function() {
  /// trees
  let t = new tree(30);
  t.insNodo(15);
  t.insNodo(8);
  t.insNodo(25);
  t.insNodo(35);
  t.insNodo(32);
  t.insNodo(40);
  t.insNodo(23);
  t.insNodo(28);

  let $table = null;
  let $container = $("[tree-searches]");
  let $containerDraw = $("[tree-draw]");
  let index = 0;

  // table result log
  let tableLog = method => {
    $table = $("<table />");
    $table.append(`<tr><td colspan='2'>${method}</td></tr>`);
    index = 0;
    t[method](t.root, node => {
      $table.append(`<tr><td>${index}</td><td>${node.value}</td></tr>`);
      index++;
    });

    $container.append($table);
    $table = null;
  };

  // previsita
  tableLog("previsita");

  // invisita
  tableLog("invisita");

  // postvisita
  tableLog("postvisita");

  // draw
  t.draw($, $containerDraw, t.root);

  // draw
  t.sommaValoriPadriEdAggiungiFiglio(t.root, 0);
  // draw
  t.draw($, $containerDraw, t.root);

  /*
  -----
  sort
  */

  let logOrder = (elements, call, perno) => {
    let quickSortContainer = $("[list-order-quick-sort]");
    let el = $("<div class='col-md-6' />");
    el.html(
      "call: " + call + "; elements : " + elements.join() + "; perno: " + perno
    );
    quickSortContainer.append(el);
  };
  let elements = [38, 81, 22, 48, 13, 69, 93, 14, 45, 58, 79, 72];


  $("[run-quick-sort]").click(() => {
    let sortInstance = new sort();
    sortInstance.quickSort(elements, 0, elements.length - 1, logOrder, 0);
  });
  
});
