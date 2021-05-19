var instance = ShoesCatalogue()
var localShoe = JSON.parse(localStorage.getItem('shoeCatalogue'))
var cartST = JSON.parse(localStorage.getItem('addToCart'))

var shoeCart = document.querySelector('.shoe-cart').innerHTML
var shoeCartTemplate = Handlebars.compile(shoeCart)

instance.setShoeData(localShoe)
instance.setCartStorrage(cartST)

var disShoeCart = document.getElementById('shoeCart')
disShoeCart.innerHTML = shoeCartTemplate({shoecart: cartST })

function removeItem(removeItem){
    if (instance.removeItem(removeItem)){
        localStorage.setItem('addToCart', JSON.stringify(instance.getCartStorage()))
        localStorage.setItem('shoeCatalogue', JSON.stringify(instance.getShoeData()))
        disShoeCart.innerHTML = shoeCartTemplate({shoecart: cartST })
    }
    location.reload()
}

document.getElementById('checkOut').addEventListener('click', function(){
    instance.setCartStorrage([])
    localStorage.setItem('addToCart', JSON.stringify(instance.getCartStorage()))
    location.reload()
})
