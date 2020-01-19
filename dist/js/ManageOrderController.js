$(function () {

    loadOrders();
    $("#txtOrderId").val(generateNewId());
    $("#txtOrderDate").val(generateDate());

    loadCustomerIds();
    loadItemIds();
    selectCusName();
    selectItemCode();

    loadNewOrders();

    $("#btn-clear").click(function () {

    })
});

function generateDate() {
    var d = new Date();
    var month = d.getMonth()+1;
    return d.getFullYear()+"-"+month+"-"+d.getDate();
}

function loadOrders() {
    $("#tbl-placeOrder tbody tr").remove();
    for (var i = 0; i <orders.length ; i++) {
        var row = '<tr>\n' +
            '<td>'+orders[i].orderId+'</th>\n' +
            '<td>'+orders[i].date+'</td>\n' +
            '<td>'+orders[i].customerId+'</td>\n' +
            '<td>'+orders[i].name+'</td>\n' +
            '<td>'+orders[i].total+'</td>\n' +
            '<td class="text-center"><i class="fas fa-trash-alt"></i></td>\n' +
            '</tr>';
        $("#tbl-placeOrder tbody").append(row);
    }
}

function loadCustomerIds() {
    for (var i = 0; i <customers.length ; i++) {
        var id = '<option>'+customers[i].id +'</option>';
        $("#txtId").append(id);
    }
}

function loadItemIds() {
    for (var i = 0; i <items.length ; i++) {
        var code = '<option>'+items[i].code +'</option>';
        $("#txtCode").append(code);
    }
}

function selectCusName(){
    $("#txtId").click(function () {
        for (var i = 0; i < customers.length; i++) {
            if($("#txtId").val()==customers[i].id){
                $("#txtName").val(customers[i].name);
            }
        }
    });
}

function selectItemCode() {
    $("#txtCode").click(function () {
        for (var i = 0; i < items.length; i++) {
            if($("#txtCode").val()==items[i].code){
                $("#txtDescription").val(items[i].description);
                $("#txtQtyOnHand").val(items[i].qty);
                $("#txtUnitPrice").val(items[i].unitPrice);
            }
        }
    });
}

function generateNewId() {
    var lastId = $("#tbl-placeOrder tbody tr:last-child td:first-child").text();
    lastId = parseInt(lastId.replace(/[OD]/g, ''));
    lastId=lastId+1;

    if(lastId<=10){
        lastId = "OD00"+lastId;
    }else if(lastId<=100){
        lastId = "OD0"+lastId;
    }else if(lastId<1000){
        lastId = "OD"+lastId;
    }
    return lastId;
}



function loadNewOrders() {

    $("#btn-add").click(function () {

        var orderId = $("#txtOrderId").val();
        var cusId = $("#txtId").val();
        var cusName = $("#txtName").val();
        var item = $("#txtCode").val();
        var description = $("#txtDescription").val();
        var qtyOnHand = parseInt($("#txtQtyOnHand").val());
        var unitPrice = parseInt($("#txtUnitPrice").val());
        var qty = parseInt($("#txtQty").val());
        var rowTotal = unitPrice * qty;

        if (qty > qtyOnHand) {
            alert("Invalid quantity,stoke not available..");
            $("#txtQty").val("Invalid Customer Id..");
            $("#txtQty").select();
            $("#txtQty").addClass("border-color");
        } else {

            var row = '<tr>\n' +
                '<td>' + orderId + '</th>\n' +
                '<td>' + generateDate() + '</td>\n' +
                '<td>' + cusId + '</td>\n' +
                '<td>' + cusName + '</td>\n' +
                '<td>' + rowTotal + '</td>\n' +
                '<td class="text-center"><i class="fas fa-trash-alt"></i></td>\n' +
                '</tr>';

            $("#tbl-placeOrder").append(row);
            $("#txtQty").val("");
            $("#txtQty").removeClass("border-color");

            $("#txtOrderId").val(generateNewId());
            $("#txtOrderDate").val(generateDate());
        }
    });
}
