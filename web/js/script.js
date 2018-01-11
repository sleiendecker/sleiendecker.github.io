$(function () {

  const table = $('table').DataTable({
    "columns": [
      { 
        "data": "NAME",
        "render": function (data, type, row, meta) {
          let rowAnchor = `<td><a href="${row.URL}">${data}</td>`,
            rowData = row.URL ? rowAnchor : data;
          return rowData
        }
      },
      { "data": "BREWERY" },
      { "data": "RATING" }
    ],
  });
  
  $.each(data, function (i, item) {
    table.rows.add(data).draw();
  });
  table.draw();
  
});