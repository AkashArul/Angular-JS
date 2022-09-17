function string(){
    let a= document.getElementById("string").value;
    let b =a.split(" ");
    console.log(b);
    document.getElementById("common").value=b;
    let c = b.toString();
    console.log(c);
    document.getElementById("stringresult").value=c;
}
function jn()
{
    let a = document.getElementById("join").value;
    let b =a.split(" ");
    console.log(b);
    let c = b.join("-");
    console.log(c);
    document.getElementById("joinresult").value=c;
}
function psh()
{
    let a = document.getElementById("maininput").value;
    let b=a.split(" ");
    console.log(b);
    let c = document.getElementById("push").value;
     b.push(c);
    console.log(b);
    document.getElementById("pushresult").value=b;
    document.getElementById("default").value=b;
}

function ushift(){
    let a = document.getElementById("default").value;
    let b=a.split(" ");
    console.log(b);
    let c = document.getElementById("unshift").value;
    b.unshift(c);
   console.log(b);
   document.getElementById("ushiftresult").value=b;

}
function adchn(){
    let a = document.getElementById("adcng").value;
    let b=a.split(" ");
    console.log(b);
    let c = document.getElementById("add").value;
    let d= document.getElementById("chng").value;
    b[d]=c;
    console.log(b);
    document.getElementById("ACresult").value=b;
}
function pop(){
    let a =document.getElementById("pop").value;
    let b=a.split(" ");
    console.log(b);
    b.pop();
    console.log(b);
    document.getElementById("popresult").value = b;
}
function shift(){
    let a =document.getElementById("shift").value;
    let b=a.split(" ");
    console.log(b);
    b.shift();
    console.log(b);
    document.getElementById("shiftresult").value = b;
}

function length()
{
    let a =document.getElementById("length").value;
    let b=a.split(" ");
    console.log(b);
    let c=b.length;
    console.log(c);
    document.getElementById("lenresult").value=c;
}
function ccat(){
    let a = document.getElementById("con").value;
    let b=a.split(" ");
    console.log(b);
    let c = document.getElementById("cat").value;
    let d=c.split(" ");
    console.log(d);
    let e=b.concat(d);
    document.getElementById("ccresult").value=e;
    console.log(e);
}

function splice()
{
  let a= ["Banana", "Orange", "Apple", "Mango"];
  let b=document.getElementById("fsplice").value;
  let c=document.getElementById("ssplice").value;
  let d=document.getElementById("asplice").value;
  a.splice(b,c,d);
  console.log(a);
}

function slice()
{
  let a=["Banana", "Orange", "Apple", "Mango"];
  let b=document.getElementById("fslice").value;
  let c=document.getElementById("sslice").value;
  let d=a.slice(b,c);
  console.log(d);
}

function sarry()
{
  let a=document.getElementById("sarry").value;
  let b = a.split(" ");
  b.sort();
  console.log(b);
}
function rarry()
{
  let a=document.getElementById("rarry").value;
  let b = a.split(" ");
  b.reverse();
  console.log(b);
}
function inarry()
{
  let a = ["Mobile","Ipad","Laptop","charger"];
  let b=document.getElementById("inarry").value;
  let c=a.indexOf(b);
  console.log(c);
}
function incarry()
{
  let a =["Banana", "Orange", "Apple", "Mango"];
  let b=document.getElementById("incarry").value;
  let c=a.includes(b);
  console.log(c);
}
function arr()
{
  let a=document.getElementById("arr").value;
  let b=a.split(" ");
  console.log(b);
  let c=Array.isArray(b);
  console.log(c);
}
function stng()
{
  let a=document.getElementById("stng").value;
  let b=Array.isArray(a);
  console.log(b);
}