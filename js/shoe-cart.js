var instance = ShoesCatalogue()
var localShoe = JSON.parse(localStorage.getItem('shoeCatalogue'))
var cartST = JSON.parse(localStorage.getItem('addToCart'))

var shoeCart = document.querySelector('.shoe-cart').innerHTML
var shoeCartTemplate = Handlebars.compile(shoeCart)

instance.setShoeData(localShoe)
instance.setCartStorrage(cartST)

// var disShoeCart = document.getElementById('shoeCart')
// disShoeCart.innerHTML = shoeCartTemplate({shoecart: displayCart })
var disShoeCart = document.getElementById('shoeCart')
disShoeCart.innerHTML = shoeCartTemplate({shoecart: cartST })

// console.log("LocalStorg: " + cartST)
// console.log("Cartalogue: " + cartST)
function removeItem(removeItem){
    if (instance.removeItem(removeItem)){
        localStorage.setItem('addToCart', JSON.stringify(instance.getCartStorage()))
        localStorage.setItem('shoeCatalogue', JSON.stringify(instance.getShoeData()))
        disShoeCart.innerHTML = shoeCartTemplate({shoecart: cartST })
    }
    location.reload()
}

document.getElementById('checkOut').addEventListener('click', function(){
    localStorage.setItem('addToCart', JSON.stringify([]))
    location.reload()
})
