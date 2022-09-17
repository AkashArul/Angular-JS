
function display(val) {
    document.getElementById("calfield").value += val ;
    return val;
}
function solve(){
    let x = document.getElementById("calfield").value;
    let y = eval(x);
    document.getElementById("result").value = y ;
    return y;
}   
function reset()
{
    document.getElementById("calfield").value="";
    document.getElementById("result").value ="";
}