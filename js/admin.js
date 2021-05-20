var instance = ShoesCatalogue()

if (localStorage['shoeCatalogue']){
    var localShoe = JSON.parse(localStorage.getItem('shoeCatalogue'))
} else {
    var localShoe = Data()
}

instance.setShoeData(localShoe)

console.log(localShoe)

var addButton = document.getElementById('addButton')
var notadded = document.getElementById('notadded')

addButton.addEventListener('click', function(){
    var brand = document.getElementById('brand').value
    var color = document.getElementById('color').value
    var size = document.getElementById('size').value
    var stock = document.getElementById('stock').value
    var price = document.getElementById('price').value
    var img = document.getElementById('img').value
    var qty = 0

    var addShoesData = {}
    if (brand != '' && color != '' && size != '' && stock != '' && img != '' ){
        addShoesData.brand = brand
        addShoesData.color = color
        addShoesData.size = parseInt(size)
        addShoesData.in_stock = parseInt(stock)
        addShoesData._id = instance.getShoeData().length + 1
        addShoesData.price = parseInt(price)
        addShoesData.img = img
        addShoesData.qty = parseInt(qty)
        console.log('Data to be added: ' + addShoesData)
        instance.addShoesObject(addShoesData)
        localStorage.setItem('shoeCatalogue', JSON.stringify(instance.getShoeData()));
        alert('Shoe was added and now you will be redirected to Shoe Catalogue!🤝')
        window.location.href = './'
    } else {
        notadded.innerHTML = "Please make sure that all the fields are entered!!!💁🏾‍♂️"
        setTimeout(function(){
            notadded.innerHTML = ''
        }, 3000)
    }
})
