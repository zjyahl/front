'use strict';

/*
<table border="1">
<caption>Monthly savings</caption>
<thead><tr><th>Month</th></tr></thead>
<tfoot><tr><td>Sum</td></tr></tfoot>
<tbody><tr><td>January</td></tr></tbody>
</table> 
*/
var table = document.createElement('table');
table.border = 1;
table.width = '100%';
table.caption;
table.tHead;
table.tBodies;
table.tFoot;
table.rows;
table.createTHead();
table.createTFoot();
table.createCaption();
table.deleteTFoot();
table.deleteCaption();
table.deleteRow(pos);
table.insertRow(pos);

tbody.rows;
tbody.deleteRow(pos);
tbody.insertRow(pos);
tr.cells;
tr.deleteCell(pos);
tr.insertCell(pos);

var tbody = document.createElement('tbody');
table.appendChild(tbody);

tbody.insertRow(0);
var row = tbody.rows[0];
row.insertCell(0);
var cell = row.cells[0];
cell.appendChile(document.createTextNode("cell 0,0"));