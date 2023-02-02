let Btn = document.getElementById("Btn");
console.log(Btn);

function Answer(){
    let TodayDate = new Date();
    console.log(TodayDate);


    ///// Code for the Date /////
    let date = TodayDate.getDate();
    let NewDate="";
    if(date<10){
        NewDate = "0"+date;
        console.log(NewDate);
    }
    else{
        NewDate = date;
    }

    //////// Code for the Month //////
    let mnth = TodayDate.getMonth()+1;
    let Month = "";
    switch (mnth) {
        case 1:
        Month="January";
        break;

        case 2:
        Month="February";
        break;

        case 3:
        Month="March";
        break;

        case 4:
        Month="April";
        break;

        case 5:
        Month="May";
        break;

        case 6:
        Month="June";
        break;

        case 7:
        Month="July";
        break;

        case 8:
        Month="August";
        break;

        case 9:
        Month="September";
        break;

        case 10:
        Month="October";
        break;

        case 11:
        Month="November";
        break;

        case 12:
        Month="December";
        break;

        default:
        break;
    }
    console.log(Month);

    //////////// Code for thwe Year ////////
    let Year = TodayDate.getFullYear();
    console.log(Year);

    //////// Code for the Day /////
    let day = TodayDate.getDay();
    let Today = "";
    switch (day) {
        case 1:
            Today="Monday";
        break;

        case 2:
            Today="Tuesday";
        break;
        
        case 3:
            Today = "Wednesday";
            break;
        case 4:
            Today= "Thrusday";    
            break;
        case 5:
            Today = "Friday";
            break;
            
        case 6:
            Today = "Saturday";
            break;
        case 7:
            Today = "Sunday";
            break;        
        default:
            break;
    }
    console.log(Today);


    /////// Code for Hours ///////

    let Sec = TodayDate.getSeconds();
    console.log(Sec);

    let Min = TodayDate.getMinutes();
    console.log(Min);

    let Hour = TodayDate.getHours();
    console.log(Hour);

    let Answer = document.getElementById("Answer").innerHTML=`
    <p class="text-center fs-1"> Today is ${Today} Date : ${NewDate} ${Month} ${Year}</p>
    <p class="text-center fs-1"> Time is ${Hour} : ${Min} : ${Sec}</p>
    `;
}