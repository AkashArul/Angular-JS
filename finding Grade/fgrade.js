let a;
let b;
function percentage(){
    a = document.getElementById("mark").value;
    if ( a>90 && a<=100){
        console.log(a);
        b = "S Grade - Excellent";
        console.log(b);
        document.getElementById("dgarde").innerHTML=b;
        document.getElementById("dname").innerHTML=document.getElementById("name").value;
        document.getElementById("droll").innerHTML=document.getElementById("roll").value;
        document.getElementById("dclass").innerHTML=document.getElementById("class").value;
        document.getElementById("dsec").innerHTML=document.getElementById("section").value;
        document.getElementById("dmark").innerHTML=document.getElementById("mark").value;
    }

    else if(a>80 && a<=90) {
        console.log(a);
        b = "A Grade - Very Good";
        console.log(b);
        document.getElementById("dgarde").innerHTML=b;
        document.getElementById("dname").innerHTML=document.getElementById("name").value;
        document.getElementById("droll").innerHTML=document.getElementById("roll").value;
        document.getElementById("dclass").innerHTML=document.getElementById("class").value;
        document.getElementById("dsec").innerHTML=document.getElementById("section").value;
        document.getElementById("dmark").innerHTML=document.getElementById("mark").value;
    }
    else if(a>70 && a<=80) {
        console.log(a);
        b = "B Grade -  Good";
        console.log(b);
        document.getElementById("dgarde").innerHTML=b;
        document.getElementById("dname").innerHTML=document.getElementById("name").value;
        document.getElementById("droll").innerHTML=document.getElementById("roll").value;
        document.getElementById("dclass").innerHTML=document.getElementById("class").value;
        document.getElementById("dsec").innerHTML=document.getElementById("section").value;
        document.getElementById("dmark").innerHTML=document.getElementById("mark").value;
    }
    else if(a>60 && a<=70) {
        console.log(a);
        b = "C Grade -  Keep Tring for the Best";
        console.log(b);
        document.getElementById("dgarde").innerHTML=b;
        document.getElementById("dname").innerHTML=document.getElementById("name").value;
        document.getElementById("droll").innerHTML=document.getElementById("roll").value;
        document.getElementById("dclass").innerHTML=document.getElementById("class").value;
        document.getElementById("dsec").innerHTML=document.getElementById("section").value;
        document.getElementById("dmark").innerHTML=document.getElementById("mark").value;
    }
    else if(a>50 && a<=60) {
        console.log(a);
        b = "D Grade -  You must concentrate on Studies";
        console.log(b);
        document.getElementById("dgarde").innerHTML=b;
        document.getElementById("dname").innerHTML=document.getElementById("name").value;
        document.getElementById("droll").innerHTML=document.getElementById("roll").value;
        document.getElementById("dclass").innerHTML=document.getElementById("class").value;
        document.getElementById("dsec").innerHTML=document.getElementById("section").value;
        document.getElementById("dmark").innerHTML=document.getElementById("mark").value;
    }
    else if(a>50 && a<=60) {
        console.log(a);
        b = "D Grade -  You must concentrate on Studies";
        console.log(b);
        document.getElementById("dgarde").innerHTML=b;
        document.getElementById("dname").innerHTML=document.getElementById("name").value;
        document.getElementById("droll").innerHTML=document.getElementById("roll").value;
        document.getElementById("dclass").innerHTML=document.getElementById("class").value;
        document.getElementById("dsec").innerHTML=document.getElementById("section").value;
        document.getElementById("dmark").innerHTML=document.getElementById("mark").value;
    }
    else if(a>40 && a<=50) {
        console.log(a);
        b = "E Grade -  You must concentrate on Studies";
        console.log(b);
        document.getElementById("dgarde").innerHTML=b;
        document.getElementById("dname").innerHTML=document.getElementById("name").value;
        document.getElementById("droll").innerHTML=document.getElementById("roll").value;
        document.getElementById("dclass").innerHTML=document.getElementById("class").value;
        document.getElementById("dsec").innerHTML=document.getElementById("section").value;
        document.getElementById("dmark").innerHTML=document.getElementById("mark").value;
    }
    else if(a>0 && a<=40) {
        console.log(a);
        b = "Invalid Mark";
        console.log(b);
        document.getElementById("dgarde").innerHTML=b;
        document.getElementById("dname").innerHTML=document.getElementById("name").value;
        document.getElementById("droll").innerHTML=document.getElementById("roll").value;
        document.getElementById("dclass").innerHTML=document.getElementById("class").value;
        document.getElementById("dsec").innerHTML=document.getElementById("section").value;
        document.getElementById("dmark").innerHTML=document.getElementById("mark").value;
    }

}