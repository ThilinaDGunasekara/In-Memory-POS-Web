$(function () {
    loadToBox();
});

function loadToBox() {
    $("#box-customers").text(customers.length);
    $("#box-items").text(items.length);
    $("#box-orders").text(orders.length);
}

