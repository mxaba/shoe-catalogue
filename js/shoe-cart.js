var instance = ShoesCatalogue()
var localShoe = JSON.parse(localStorage.getItem('shoeCatalogue'))
var cartST = JSON.parse(localStorage.getItem('addToCart'))
var checkOut = document.getElementById('checkOut')

var shoeCart = document.querySelector('.shoe-cart').innerHTML
var shoeCartTemplate = Handlebars.compile(shoeCart)
var total = 0
if (localStorage['total']){
    total = localStorage.getItem("total")
}

instance.setShoeData(localShoe)
instance.setCartStorrage(cartST)
instance.setTotal(parseFloat(total))

var disShoeCart = document.getElementById('shoeCart')
var redirect = document.getElementById('redirect')
disShoeCart.innerHTML = shoeCartTemplate({shoecart: cartST })
document.querySelector('.total').innerHTML = "Total: R "+ parseFloat(total)

function removeItem(removeItem){
    if (instance.removeItem(removeItem)){
        localStorage.setItem('addToCart', JSON.stringify(instance.getCartStorage()))
        localStorage.setItem('shoeCatalogue', JSON.stringify(instance.getShoeData()))
        localStorage.setItem("total", instance.getTotal());
        disShoeCart.innerHTML = shoeCartTemplate({shoecart: cartST })
    }
    location.reload()
}

// if ()

document.getElementById('checkOut').addEventListener('click', function(){
    alert('Thank you for shopping with us!🤝')
    setTimeout(function(){
        instance.checkOut()
        instance.setCartStorrage([])
        localStorage.setItem('addToCart', JSON.stringify(instance.getCartStorage()))
        localStorage.setItem("total", 0);
        localStorage.setItem('shoeCatalogue', JSON.stringify(instance.getShoeData()));
        window.location.href = './'
    })
    
})
