let plus = document.getElementsByClassName('plus');

console.log(plus)
let moins = document.getElementsByClassName('moins');
console.log(moins)
let inputs = document.getElementsByClassName('inp');
console.log(inputs)


for (let i=0 ; i<plus.length; i++) {


plus[i].addEventListener('click', function(){

inputs[i].value = parseInt(inputs[i].value,10) +1 ;

updateTotal();



})

}


for (let i=0 ; i<moins.length ; i++) {

moins[i].addEventListener('click', function(){

    if (parseInt(inputs[i].value,10) > 0){

    inputs[i].value = parseInt(inputs[i].value,10) -1 ;

    updateTotal();
    
}

})

}

let total = document.getElementById('total');   
let prices = document.getElementsByClassName('price');

console.log(prices)



function updateTotal() {

let sum =0 ;

for (let i=0 ; i<prices.length ; i++) {

sum = sum + parseInt(inputs[i].value,10) * parseInt(prices[i].innerHTML,10) ;

}


total.innerHTML = sum ;


} 



let svg = document.getElementsByTagName('svg');
console.log(svg);

for (let i=0 ; i<svg.length ; i++) {

svg[i].addEventListener('click', function(){

if (this.style.fill === "red"){
this.style.fill = "none" ;
}
else {

    this.style.fill = "red";
}

})


}

updateTotal();


let removebtn = Array.from(document.getElementsByClassName('delete'));
console.log(removebtn);
let cards = Array.from(document.getElementsByClassName('card'));
console.log(cards);

for (let i=0 ; i<removebtn.length ; i++) {

removebtn[i].addEventListener('click' , function(){

cards[i].remove();

updateTotal();

})



}




