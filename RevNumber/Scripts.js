let Btn = document.getElementById("Btn");
console.log(Btn);


 ////////// Add Function  //////////
function Rev(){

    //////// Take Number as a String Input ////////
    let Num = document.getElementById("Num").value;
     
    //////////  Convert String into Array ///////
    let arrNum = Num.split("");
    console.log(arrNum);

    /////////// Reverse the Array //////////
    let revNum = arrNum.reverse();
    console.log(revNum);

    ///////////  Convert the Reverted Array into String /////////
    let revAns = revNum.join("");
    console.log(revAns);
    
    let Result = revAns;
    let Answer = document.getElementById("Answer").innerHTML=`
 <p class="fs-2 mt-2 text-center px-2 border rounded-3 border-3 bg-white"> Reverse number is = ${Result}</p>
 `;
}

 /////////// Code For the Visit the Code ////
function Code(){
    let Sc = document.getElementById("Sc");
    window.open(Sc);
}
