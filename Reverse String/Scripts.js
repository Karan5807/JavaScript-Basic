let Btn = document.getElementById("Btn");
console.log(Btn);

function Reverse(){
let Str = document.getElementById("inputStr").value;


//////  Convert String into Array ////
let Arr = Str.split("");
/////// Reverse the Array ///////
let RevText=Arr.reverse();

//////// Join the Array using Join function ///////
let Text = RevText.join("");
console.log(Text);

let Answer = document.getElementById("Answer").innerHTML=`
<p class="text-center fs-2 m-2 p-2 rounded-3">Answer = ${Text} </p>
`;



/*

let y="";
for(let i=Str.length; i>=0; i--){
    y=y+Str[i];
}
console.log(y);

*/


}