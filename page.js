let firstname=document.getElementById("f_name");
let lastname=document.getElementById("l_name");
let mail=document.getElementById("mail_id");
let contentAreaTag=document.getElementById("contentArea");

let emp=[];


function Add(){
    let obj={
        f_name:firstname.value,
        l_name:lastname.value,
        mail_id:mail.value
    };
    emp.push(obj);

    display();
}

function display(){
    let StringToPrint="";
    for(let i=0;i<emp.length;i++){
        let ele=emp[i];
        StringToPrint=StringToPrint+`<div>${ele.f_name}</div><div>${ele.l_name}</div><div>${ele.mail_id}</div>`
       // StringToPrint=StringToPrint+`${ele.f_name}${ele.l_name}${ele.mail_id}`
    }
    contentAreaTag.innerHTML=StringToPrint;
    //console.log(StringToPrint);
   
}