let Btn = document.getElementById("Btn");
console.log(Btn);

 ////////// Take a Random Number  //////////
let guessNum = Math.ceil(Math.random()*10);
 console.log(guessNum);

 ////// Array for Stored User Guessed Number /////
 let arrNum =[];
 let Count = 0;

function Check(){
 //////////// Code for getting user data ////////
 let userNum =document.getElementById("Num").value;
 console.log((userNum));

 ///////// Checking the Input Value type of Number or Not //////
 if(isNaN(userNum)){
    alert("Not a Number");
 }
 else{

    ///////// Checking Input Values Should be in Range /////
    if(userNum>10 || userNum<1){
        alert("Please Pick a Number Between 1 to 10");
    } 
    else{
        ///// Push the Gussed Number into Array ////
        arrNum.push(userNum);

        /////// Condition Checking Process - 1 //////
        if(userNum > guessNum){
            Count ++;
            let Answer = document.getElementById("Answer").innerHTML=`
            <p class="fs-2 mt-2 text-center px-2 border rounded-3 border-3 bg-white"> Number is High</p>
            <p class="fs-2 mt-2 text-center px-2 border rounded-3 border-3 bg-white"> ${Count} The Gussed Numbers are: ${arrNum} </p>;`

        }
        //////// Condition Checking Process - 2 ///////
        else if(userNum < guessNum){
            Count++;
            let Answer = document.getElementById("Answer").innerHTML=`
            <p class="fs-2 mt-2 text-center px-2 border rounded-3 border-3 bg-white"> Number is Low</p>
            <p class="fs-2 mt-2 text-center px-2 border rounded-3 border-3 bg-white"> ${Count} The Gussed Numbers are: ${arrNum} </p>;`
        } 
        /////// Condition Checking Process -3 /////
        else{
            let Answer = document.getElementById("Answer").innerHTML=`
            <p class="fs-2 mt-2 text-center px-2 border rounded-3 border-3 bg-white"> Good Work </p>;
            <p class="fs-2 mt-2 text-center px-2 border rounded-3 border-3 bg-white"> ${Count} The Gussed Numbers are: ${arrNum} </p>;`
        }
    }
 }

    
}
 /////////// Code For the Visit the Code ////
function Code(){
    let Sc = document.getElementById("Sc");
    window.open(Sc);
}