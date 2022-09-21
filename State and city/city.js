function state()
{
    let a=document.getElementById("state").value;
    document.getElementById("city").value=a;
    console.log(a);
}
function city()
{
    let b=document.getElementById("city").value;
    document.getElementById("state").value=b;
    console.log(b);
}