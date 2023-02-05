let Btn = document.getElementById("Btn");
console.log(Btn);

function Leap(){

   /////////  Getting values from the Sides ///////
 let Year = parseInt(document.getElementById("Year").value);
 console.log(Year);
 


 //////////// Code for Calculate Side ////////
 if(Year%4 ==0 && Year%100 != 0 || Year%400 == 0)
 {
  let Answer = document.getElementById("Answer").innerHTML=`
 <p class="fs-2 mt-2 text-center px-2 border rounded-3 border-3 bg-white"> Leap Year = ${Year}</p>
 `;
 }

 else
 {
  let Answer = document.getElementById("Answer").innerHTML=`
 <p class="fs-2 mt-2 text-center px-2 border rounded-3 border-3 bg-white"> Non Leap Year = ${Year}</p>
 `;
 }

}

function Code(){
    let Sc = document.getElementById("Sc");
    window.open(Sc);
}
