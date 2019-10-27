
// var modal = document.getElementsByClassName('backdrop-modal');
// var product = document.getElementsByClassName('product');
// var closeButton = document.getElementsByClassName('close-button');

// product.addEventListeer('click', openModal);

// function openModal(){
//     modal.style.display = 'block';
// }

var backdrop = document.querySelector('.backdrop-modal');
var productModal = document.querySelector('.product-modal');
var product = document.querySelectorAll('.product');

for (var i = 0; i < product.length; i++){
    product[i].addEventListener('click', function(){
        productModal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}