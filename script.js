let likes=document.getElementsByClassName('like');

for (let i=0; i<likes.length; i++) {
    likes[i].addEventListener('click', function(){
        if (likes[i].style.color==='red'){
            likes[i].style.color='black';
        }
        else{
            likes[i].style.color='red'
        }
    })

}


let deletes=document.getElementsByClassName('delete');
let itemdiv=document.querySelectorAll('.Item');
let itemsdiv=document.querySelector('.items');
let totalPrice=document.querySelector('#finalPrice');
let prices=document.querySelectorAll('.price');
let itemQuant=document.querySelectorAll('.Quant');

for (let i=0; i<deletes.length; i++) {
    deletes[i].addEventListener('click' , ()=>removeItem(i) )    
}

function removeItem(i){
itemsdiv.removeChild(itemdiv[i])
var newtotal=parseInt(totalPrice.value)- parseInt(prices[i].getAttribute('value'))*parseInt(itemQuant[i].getAttribute('value'));
totalPrice.setAttribute('value', newtotal);


}




 

