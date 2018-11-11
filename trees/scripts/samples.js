$(document).ready(function() {
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
});
