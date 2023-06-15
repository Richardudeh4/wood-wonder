(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();

	const goodsElement = document.querySelectorAll('.product-title');
const cartElement = document.getElementById('cart-item');
const cartItems=[];
const goodsPrice = document.querySelector('.product-price');

goodsElement.forEach(goodsElement => {
	goodsElement.addEventListener('click', ()=>{
		const goodsPrice = goodsPrice.textContent;
		const goodsName = goodsElement.textContent;

		const existingItem = cartItems.find(item => item.name == goodsName);
		if(existingItem){
			existingItem.quantity ++ ;
		}
		else{
			cartItems.push({name : goodsName, price : goodsPrice, quantity: 1});
		}
		renderCart();
	});
});

function renderCart(){
	cartElement.innerHTML= " ";
	cartItems.forEach(item => {
		const itemElement = document.createElement('div');
		itemElement.textContent `
		${item.name} <br/>
		${item.price}<br/>
		(${item.quantity})
		`;

	cartElement.appendChild(itemElement);
	});
}


})();

const items= [
	 {	
		id:1,
		image : 'images/product_1.png',
		name : 'Nordic Chair',
		price : 50.00
	},
	 {	
		id:2,
		image : 'images/product_2.png',
		name : 'Kruzo Aero Chair',
		price : '78.00'
	},
	{	
		id:3,
		image: 'images/product_3.png',
		name : 'Kruzo Aero Chair',
		price : '43.00'
	}
]
const view_product = document.querySelector('product-section');

const displayProduct = (selectedProducts)=> {
	view_product.innerHTML = selectedProducts.map((product) => {
		`
		
		<div class="container">
		<div class="row">
		<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
		<a class="product-item" href="cart.html">
		<img src=${product.image} alt="" class=""/>
		<h3 class="product-title">${product.name}</h3>
		<strong class="product-price">$${product.price}</strong>
		<span class="icon-cross">
		<img src="images/cross.svg" class="img-fluid"/>
		</span>
		</strong>
		</a>
		</div>
		</div>
		</div>
		
		`
	});
}
displayProduct(items);

