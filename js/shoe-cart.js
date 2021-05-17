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

function whatsInTheCart(ShoesPassed){
    // var displayCart = {}
    // if (typeof ShoesPassed == 'object'){
    //     displayCart['addToCart'] = ShoesPassed
    // } else {
    //     displayCart = JSON.parse(localStorage.getItem('addToCart'))
    // }
    // console.log(cartST)
    
    var disShoeCart = document.getElementById('shoeCart')
    disShoeCart.innerHTML = shoeCartTemplate({shoecart: displayCart })
}
