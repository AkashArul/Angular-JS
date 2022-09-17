 
let x;
let age;
let ageres;
function percentage(){
    
let a;
let z;


a = document.getElementById("salary").value ;  
    if (a<=300000){
        
     z = (a/100)*8;
      document.getElementById('result').value = z;
      agelimit();
    }
    else if(a>300000 && a<=500000){
        z=(a/100)*10;
        document.getElementById('result').value =z;   
        agelimit();
    }
    else if(a>500000 && a<=800000){
        z=(a/100)*12;
        document.getElementById('result').value =z;
        agelimit();  
    }
    else if (a>800000 && a<=1000000){
        z=(a/100)*14;
        document.getElementById('result').value =z; 
        agelimit();
    } 
    
}
agelimit()
function agelimit(){
    
     age = document.getElementById("age").value;
    if (age<18 || age>60)
    {
        x =  document.getElementById("result").value ;
    ageres = (x/100)*50;
    document.getElementById("ageres").value = ageres;
    console.log(x);
    }
   
    else if (age>18 && age<60) {
        gender();
       }
      
   } 
   gender()
   x=document.getElementById("result").value;
   
   function gender(){
    
    if (document.getElementById("female").checked)
    {
        x=document.getElementById("result").value;
        ageres = (x/100)*10;
        document.getElementById("ageres").value = ageres;
        console.log(x);
    }
    else if (document.getElementById("male").checked){
  document.getElementById("ageres").value = document.getElementById("result").value;
    }
   }

