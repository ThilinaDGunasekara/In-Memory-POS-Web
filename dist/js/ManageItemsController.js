$(function () {
    loadItems();

    $("#txtId").val(generateNewId());

    $("#tbl-items").on('click','tbody tr td i',(function () {
        $(this).parents("tr").remove();
        //$(this).parent().parent().remove();
    }));
});


$("#btnSubmit").click(function () {
    saveCustomer();
});

$("#btn-clear").click(function () {
    clearCustomer();
});

function loadItems() {
    $("#tbl-items tbody tr").remove();
    for (var i = 0; i <items.length ; i++) {
        var row = '<tr>\n' +

            '<td>'+items[i].code+'</th>\n' +
            '<td>'+items[i].description+'</td>\n' +
            '<td>'+items[i].qty+'</td>\n' +
            '<td>'+items[i].unitPrice+'</td>\n' +
            '<td class="text-center"><i class="fas fa-trash-alt"></i></td>\n' +
            '</tr>';
        $("#tbl-items tbody").append(row);
    }
}

function saveCustomer() {
    var code = $("#txtId").val();
    var description = $("#txtName").val();
    var qty = $("#txtQtyOnHand").val();
    var unitPrice = $("#txtUnitPrice").val();

    if(!code.match("^I[0-9]{0,3}$")){
        $("#txtId").val("Invalid Item Code..");
        $("#txtId").select();
        $("#txtId").addClass("border-color");
    }else if(!description.match("^[A-Z][a-z]+$")){
        $("#txtName").val("Invalid Description..");
        $("#txtName").select();
        $("#txtName").addClass("border-color");
    }else if(!qty.match("^[0-9]+$")){
        $("#txtQtyOnHand").val("Invalid Quantity..");
        $("#txtQtyOnHand").select();
        $("#txtQtyOnHand").addClass("border-color");
    }else if(!unitPrice.match("^[0-9]+$")){
        $("#txtUnitPrice").val("Invalid Unit Price..");
        $("#txtUnitPrice").select();
        $("#txtUnitPrice").addClass("border-color");
    }else {
        var row = '<tr>\n' +
            '<td>' + generateNewId() + '</th>\n' +
            '<td>' + description + '</td>\n' +
            '<td>' + qty + '</td>\n' +
            '<td>' + unitPrice + '</td>\n' +
            '<td class="text-center"><i class="fas fa-trash-alt"></i></td>\n' +
            '</tr>';

        $("#tbl-items").append(row);

        $("#txtId").val(generateNewId());
        $("#txtId").removeClass("border-color");

        $("#txtName").val("");
        $("#txtName").removeClass("border-color");

        $("#txtQtyOnHand").val("");
        $("#txtQtyOnHand").removeClass("border-color");

        $("#txtUnitPrice").val("");
        $("#txtUnitPrice").removeClass("border-color");
    }
}

function clearCustomer() {
    $("#txtId").val("");
    $("#txtName").val("");
    $("#txtQtyOnHand").val("");
    $("#txtUnitPrice").val("");
}

function generateNewId() {

    var lastId = $("#tbl-items tbody tr:last-child td:first-child").text();
    lastId = parseInt(lastId.replace(/[I]/g, ''));
    lastId=lastId+1;

    if(lastId<=10){
        lastId = "I00"+lastId;
    }else if(lastId<=100){
        lastId = "I0"+lastId;
    }else if(lastId<1000){
        lastId = "I"+lastId;
    }
    return lastId;
}