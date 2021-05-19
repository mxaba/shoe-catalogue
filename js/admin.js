var instance = ShoesCatalogue()
var localShoe = JSON.parse(localStorage.getItem('shoeCatalogue'))

instance.setShoeData(localShoe)

