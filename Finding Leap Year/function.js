function checkLeapYear() 
{
     // take input
    var year =document.getElementById("year").value;
 
    // program to check leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year.leap year has 366 days');
        
        month();
    } else {
        console.log(year + ' is not a leap year.Non leap year has 365 days');
        month();
    }
}

function month(){
    var year =document.getElementById("year").value;
    let mon = document.getElementById("months").value;
    
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
         mon = document.getElementById("months").value;
        switch (mon){
            case "January":
                console.log("January has 31 days");
                break;
            case "February":
                console.log("February has 29 days");
                break;
            case "March":
                console.log("March has 31 days");
                break;
            case "April":
                console.log("April has 30 days");
                break;
            case "May":
                console.log("May has 31 days");
                break;
            case "June":
                console.log("June has 30 days");
                break;
            case "July":
                console.log("July has 31 days");
                break;
            case "August":
                console.log("August has 31 days");
                break;
            case "September":
                console.log("September has 30 days");
                break;
            case "October":
                console.log("October has 31 days");
                break;
            case "November":
                console.log("November has 30 days");
                break;
            case "December":
                console.log("December has 31 days");
                break;
        }
    }
    else{
        mon = document.getElementById("months").value;
        switch (mon){
            case "January":
                console.log("January has 31 days");
                break;
            case "February":
                console.log("February has 28 days");
                break;
            case "March":
                console.log("March has 31 days");
                break;
            case "April":
                console.log("April has 30 days");
                break;
            case "May":
                console.log("May has 31 days");
                break;
            case "June":
                console.log("June has 30 days");
                break;
            case "July":
                console.log("July has 31 days");
                break;
            case "August":
                console.log("August has 31 days");
                break;
            case "September":
                console.log("September has 30 days");
                break;
            case "October":
                console.log("October has 31 days");
                break;
            case "November":
                console.log("November has 30 days");
                break;
            case "December":
                console.log("December has 31 days");
                break;
        }

    }

}