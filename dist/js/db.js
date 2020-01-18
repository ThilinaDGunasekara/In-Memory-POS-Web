var customers = [];
var items = [];
var orders = [];

customers =[
    {id:"C001",name:"Alisa",address:"Panagoda"},
    {id:"C002",name:"Waduma",address:"Horana"},
    {id:"C003",name:"Pandee",address:"Monaragala"}
    ];

items = [
    {code:"I001",description:"Sop",qty:50,unitPrice:100.00},
    {code:"I002",description:"Pencil",qty:20,unitPrice:10.00},
    {code:"I003",description:"Book",qty:50,unitPrice:100.00}
    ];

orders=[
    {orderId:"OD001",date:"2020-01-01",customerId:"C001",name:"Alisa",total:5000.00},
    {orderId:"OD002",date:"2020-01-01",customerId:"C002",name:"Waduma",total:200.00},
    {orderId:"OD003",date:"2020-01-02",customerId:"C003",name:"Pandee",total:400.00},
    {orderId:"OD004",date:"2020-01-03",customerId:"C001",name:"Alisa",total:500.00}
    ];


