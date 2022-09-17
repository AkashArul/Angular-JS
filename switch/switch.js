function pet()
{
     let x = document.getElementById("pet").value;
     switch(x){
        case "dog":
            alert("i have dog");
            console.log(x);
            break;
        case "cat":
            x='I have a cat';
            console.log(x);
            break;
        case "fish":
            x = 'I have a fish';
            console.log(x);
            break;
     }
}
function num(){
    let x = document.getElementById("num").value;

    for(var z=x;z<20;z++)
    {
      console.log(z);
    }
}

function loop(){
    let x = document.getElementById("While").value;
    while(x<20){
        console.log(x);
        x++;
    }
}
function doloop(){

    let x = document.getElementById("do").value;
    do{
        console.log(x);
        x--;
    }while(x>=10);
}
function len(){
    let x = document.getElementById("Length").value;
    let y = x.length;
    console.log(y);
}
function rep(){
    let x = document.getElementById("replace").value;
    let y = x.replace("cricket","football");
    console.log(y);
}
function ucase(){
    let x = document.getElementById("ucase").value;
    let y = x.toUpperCase();
    console.log(y);
}
function lcase(){
    let x = document.getElementById("lcase").value;
    let y = x.toLowerCase();
    console.log(y);
}
function cat(){
    let x=document.getElementById("con").value;
    let y=document.getElementById("cat").value;
    let z=x.concat("",y);
    console.log(z);
}
function tword(){
    let x=document.getElementById("trim").value;
    let y=x.trim();
    console.log(y);
}
function at(){
    let x=document.getElementById("char").value;
    let y=document.getElementById("at").value;
    let z = x.charAt(y);
    console.log(z);
}
function index(){
    let x=document.getElementById("index").value;
    let y=document.getElementById("of").value;
    let z = x.indexOf(y);
    console.log(z);
}
function sword(){
    let x=document.getElementById("slice").value;
    let y=x.slice(3,8);
    console.log(y);
}

function substring(){
    let x=document.getElementById("sub").value;
    let y=x.substring(3);
    console.log(y);
}
function spt(){
    let x=document.getElementById("split").value;
    let y=x.split("-");
    console.log(y);
}
