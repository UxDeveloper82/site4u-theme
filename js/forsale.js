//  Declare Values
const removeCartItemButtons = document.getElementsByClassName('btn-danger')
const quantityInputs = document.getElementsByClassName('cart-quantity-input')
const addToCartButtons = document.getElementsByClassName('shop-item-button')
const cartItems = document.getElementsByClassName('cart-items')[0]
const cartItemContainer = document.getElementsByClassName('cart-items')[0]
const cartRows = cartItemContainer.getElementsByClassName('cart-row')
let total = 0;
let button;
let input;
let cartRow;
let i;
let title;
let price;
let imageSrc;
let cartItemNames;
let cartRowContents;
let buttonClicked; 

// Ready Method
const ready = () => {
   for(i = 0 ; i < removeCartItemButtons.length; i++){
       button = removeCartItemButtons[i]
       button.addEventListener('click', removeCartItem )
    }
    for(i = 0; i < quantityInputs.length; i++) {
        input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    for (i = 0; i < addToCartButtons.length; i++){
        button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

// Purchased Method
const purchaseClicked = () => {
    alert ('Thank you for your purchase')
    while(cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}
//Remove Items from cart
const removeCartItem = (event) => {
    buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
//Change Quantity in the cart
const quantityChanged = (event) =>{
    input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}
// Add to cart
const addToCartClicked = (event) => {
    button = event.target
    let shopItem = button.parentElement.parentElement
    title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title,price, imageSrc)
    updateCartTotal()

}
// Add item to cart
const addItemToCart = (title, price, imageSrc) => {
    cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    cartItemNames = document.getElementsByClassName('cart-item-title')
    for(i = 0 ; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart') 
            return 
        }
    }
    cartRowContents = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>`
    cartRow.innerHTML = cartRowContents                      
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

}

//Updated the cart
const updateCartTotal = () => {
    for(i =0 ; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        let price = parseFloat(priceElement.innerText.replace('$',''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100 
    document.getElementsByClassName('cart-total-price')[0].innerHTML = '$' + total
}

//Document ready loading
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
