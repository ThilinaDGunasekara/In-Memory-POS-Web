$(function () {
    loadCustomers();
    $("#txtId").val(generateNewId());

    $("#tbl-customers").on('click','tbody tr td i',(function () {
        //$(this).parents("tr").remove();
        $(this).parent().parent().remove();
    }));
});



$("#btnSubmit").click(function () {
    saveCustomer();
});

$("#btn-clear").click(function () {
    clearCustomer();
});

function loadCustomers() {
    $("#tbl-customers tbody tr").remove();
    for (var i = 0; i <customers.length ; i++) {
        var row = '<tr>\n' +

            '<td>'+customers[i].id+'</th>\n' +
            '<td>'+customers[i].name+'</td>\n' +
            '<td>'+customers[i].address+'</td>\n' +
            '<td class="text-center"><i class="fas fa-trash-alt"></i></td>\n' +
            '</tr>';
        $("#tbl-customers tbody").append(row);
    }
}

function saveCustomer() {
    var id = $("#txtId").val();
    var name = $("#txtName").val();
    var address = $("#txtCustomerAddress").val();

    if(!id.match("^C[0-9]{0,3}$")){
        $("#txtId").val("Invalid Customer Id..");
        $("#txtId").select();
        $("#txtId").addClass("border-color");
    }else if(!name.match("^[A-Z][a-z]+$")){
        $("#txtName").val("Invalid Customer Name..");
        $("#txtName").select();
        $("#txtName").addClass("border-color");
    }else if(!address.match("^[A-Z][a-z]+$")){
        $("#txtCustomerAddress").val("Invalid Customer Address..");
        $("#txtCustomerAddress").select();
        $("#txtCustomerAddress").addClass("border-color");
    }else {
        var row = '<tr>\n' +
            '<td>' + generateNewId() + '</th>\n' +
            '<td>' + name + '</td>\n' +
            '<td>' + address + '</td>\n' +
            '<td class="text-center"><i class="fas fa-trash-alt"></i></td>\n' +
            '</tr>';

        $("#tbl-customers").append(row);

        $("#txtId").val(generateNewId());
        $("#txtId").removeClass("border-color");

        $("#txtName").val("");
        $("#txtName").removeClass("border-color");

        $("#txtCustomerAddress").val("");
        $("#txtCustomerAddress").removeClass("border-color");
    }
}

function clearCustomer() {
    $("#txtId").val("");
    $("#txtName").val("");
    $("#txtCustomerAddress").val("");
}

function generateNewId() {

    var lastId = $("#tbl-customers tbody tr:last-child td:first-child").text();
    lastId = parseInt(lastId.replace(/[C]/g, ''));
    lastId=lastId+1;

    if(lastId<=10){
        lastId = "C00"+lastId;
    }else if(lastId<=100){
        lastId = "C0"+lastId;
    }else if(lastId<1000){
        lastId = "C"+lastId;
    }
    return lastId;
}





