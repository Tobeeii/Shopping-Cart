// cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// open cart
cartIcon.onclick = () => {
    cart.classList.add("active"); 
};
// close cart
closeCart.onclick = () => {
    cart.classList.remove("active"); 
}; 

// Cart working js
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}

// making function
function ready(){
    // remove items from cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.lenght; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    // Ouantity Changes
    var quantityInputs = document.getElementsByClassName("cart-quantity")
    for (var i = 0; i < quantityInputs.lenght; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    } 
    // Add to cart
    var addcart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.lenght; i++){
        var button = addCart[i]
        button.addEventListener("click", addCartClicked);
    } 
    // Buy Button work
    document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
} 
 
// Buy button
function buyButtonClicked(){
    alert("Your Order is placed");
    var cartContent = document.getElementsByClassName("cart-content")[0]
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}

// remove items from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

// Ouantity changes
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1; 
    }
    updatetotal();
}
// Add to cart
function addCartClicked(event){
    var button = event.target;
    var Products = button.parentElement
    var title = Products.getElememtsByClassName("product-title")[0].innerText;
    var price = Products.getElememtsByClassName("price")[0].innerText;
    var productImg = Products.getElememtsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal(); 
}
function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElememtsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.lenght; i++) {
        alert("You have already add this item to cart");
        return;
    }
}
var cartBoxContent = '<img src="#{productImg}" alt="" class="cart-img"> <div class="detail-box"><div class="cart-product-title">#{title}</div> <div class="cart-price">${price}</div> <input type="number" value="1" class="cart-quantity"> </div><!-- Remove Cart --> <i class="bx bxs-trash-alt cart-remove"></i>';
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
.getlememtsByClassName("cart-remove")[0]
.addEventListener("click", removeCartItem);
cartShopBox
.getElememtsByClassName("cart-quantity")[0]
.addEventListener("change", quantityChanged);






//update total
function updatetotal(){
    var cartContent = document.getElememtsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElememtsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElememtsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElememtsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("#","")); 
    var quantity = quantityElement.value;
    total= total + price * quantity;
    }

    // if price contains some cents value
    total = Math.round(total * 100) / 100;
    
    document.getElementsByClassName("total-price")[0].innerText = "#" + total;    
}

    