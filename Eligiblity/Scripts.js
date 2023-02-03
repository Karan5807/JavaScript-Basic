let Btn = document.getElementById("Btn");
console.log(Btn);

let PanLink = "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html";
let DLlink = "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do";
let PassPort = "https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en";
let SwizzAccount = "https://www.ubs.com/ch/en/private/accounts-and-cards/accounts.html";

function Check(){
let FName = document.getElementById("FName").value;
if(FName.length<3){
    alert("Please Enter Full First Name");
}
let LName = document.getElementById("LName").value;
if(LName.length<4){
    alert("Please Enter Full Last Name");
}
let Age = document.getElementById("Age").value;


////// If Age is Greater than 18 and Less Than 35 //////////
if(Age>18 && Age<35){
    let Answer = document.getElementById("Answer").innerHTML=
    ` 
    <p class="text-center fs-3 mt-3 p-2"> Dear ${FName} ${LName} you are Eligible for Voting in Upcoming Election. <br> You are also Eligible for Apply <a href="${PanLink}">Pan-Card</a> , <a href="${DLlink}">Driving-Licence</a>, <a href="${PassPort}">Passport</a>.</p>
    `;
}

//////// If Age is Greater than 80 ///////

else if(Age>80){
    let Answer = document.getElementById("Answer").innerHTML=
    ` 
    <p class="text-center fs-3 mt-3 p-2"> Dear ${FName} ${LName} are you Still Alive.</p>
    `;
}

////////////// If Age is Greater than 35 and Less Than 80 ///////
else if(Age>35 && Age<80){
    let Answer = document.getElementById("Answer").innerHTML=
    ` 
    <p class="text-center fs-3 mt-3 p-2"> Dear ${FName} ${LName} you are Eligible for Voting and also to Participate as a Candidate in Upcoming Election. <br>Hope you have Basic Govt Documnet,If not then Please go through this: Apply for <a href="${PanLink}">Pan-Card</a> , <a href="${DLlink}">Driving-Licence</a>, <a href="${PassPort}">Passport</a>, <a href="${SwizzAccount}">Swiss Bank Account</a>".</p>
    `;
}

///////////// If Age is Grater than 0 and Less Than 18 //////
else if(Age>0 && Age<18){
    let Answer = document.getElementById("Answer").innerHTML=
    ` 
    <p class="text-center fs-3 mt-3 p-2"> Dear ${FName} ${LName} you are not Eligible for Voting. <br> Please away from Election and Political Parties , it's Good for your Mental Health, It's Time to Study not to Vote.</p>
    `;
}
}