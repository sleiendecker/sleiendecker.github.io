$(function () {
  const table = $('table').DataTable({
    "aaSorting": [[2, 'desc']],
    "lengthMenu": [[-1], ["All"]],
    "bLengthChange": false,
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
  table.rows.add(data).draw();;
  
});