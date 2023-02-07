let Btn = document.getElementById("Btn");
console.log(Btn);


/////////// Global Declartion With undefiend value ////////
let Num1 = "";
let Num2 = "";

 ////////// Add Function  //////////
function Mul(){
    Num1 = parseInt(document.getElementById("Num1").value);
    Num2 = parseInt(document.getElementById("Num2").value);
    let Result = Num1*Num2;
    let Answer = document.getElementById("Answer").innerHTML=`
 <p class="fs-2 mt-2 text-center px-2 border rounded-3 border-3 bg-white"> Sum is = ${Result}</p>
 `;
}

////////////////////Subtract Function /////////
function Div(){
    Num1 = document.getElementById("Num1").value;
    Num2 = document.getElementById("Num2").value;
    let subRes = (Num2/Num1).toFixed(2);
    
    let Answer = document.getElementById("Answer").innerHTML=`
    <p class="fs-2 mt-2 text-center px-2 border rounded-3 border-3 bg-white"> Leap Year = ${subRes}</p>
    `;  
}
 /////////// Code For the Visit the Code ////
function Code(){
    let Sc = document.getElementById("Sc");
    window.open(Sc);
}
