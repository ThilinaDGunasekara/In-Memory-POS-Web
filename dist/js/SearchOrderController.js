$(function () {
    loadOrders();
});

function loadOrders() {
    $("#tbl-orders tbody tr").remove();
    for (var i = 0; i <orders.length ; i++) {
        var row = '<tr>\n' +
            '<td>'+orders[i].orderId+'</th>\n' +
            '<td>'+orders[i].date+'</td>\n' +
            '<td>'+orders[i].customerId+'</td>\n' +
            '<td>'+orders[i].name+'</td>\n' +
            '<td>'+orders[i].total+'</td>\n' +
            '</tr>';
        $("#tbl-orders tbody").append(row);
    }
}