// document.addEventListener('DOMContentLoaded', function(){
    var shoeCatalogueTemplate = document.querySelector('.shoe-catalogue-template').innerHTML
    var shoeCompiledTemplate = Handlebars.compile(shoeCatalogueTemplate)

    var shoeSection = document.querySelector('.shoe-section')
    var reset = document.querySelector('.reset')

    var initLogic = ShoesCatalogue()
    var shoeLocal = {}

    if (localStorage['shoeCatalogue']){
        console.log('shoeCatalogue')
        shoeLocal = JSON.parse(localStorage.getItem('shoeCatalogue'))
    } else {
        console.log('Data Object')
        shoeLocal = Data()
    }

    var cartST =  {} 
    var cartSTArray = []
    if (localStorage['addToCart']){
        cartST = JSON.parse(localStorage.getItem('addToCart'))
        cartSTArray = JSON.parse(localStorage.getItem('addToCart'))
    }

    initLogic.setShoeData(shoeLocal)
    if (cartSTArray.length !== 0){
        initLogic.setCartStorrage(cartSTArray)
    }
    displayShoes(shoeLocal)

    function displayShoes(array){
        shoeSection.innerHTML = shoeCompiledTemplate({shoesList: array} )
        // console.log(shoeCompiledTemplate({shoesList: initLogic.getShoeData()} ))
    }

    function addBtnCart(init){
        // location.reload()

        if (initLogic.addBtnCart(init)){
            localStorage.setItem('addToCart', JSON.stringify(initLogic.getCartStorage()));
            localStorage.setItem('shoeCatalogue', JSON.stringify(initLogic.getShoeData()));
            displayShoes(shoeLocal)
        }
    }

    reset.addEventListener('click', function(){
        localStorage.clear()
        location.reload()
    })

    document.querySelector('.search').addEventListener('click', function(){
        var colorValue = document.getElementById('color').value
        var brandValue = document.getElementById('brand').value
        var sizeValue = document.getElementById('size').value

        var searchData = {}
        
        if (colorValue !== ""){
            searchData.color = colorValue
        } if (sizeValue !== ""){
            searchData.size = sizeValue
        } if (brandValue !== "") {
            searchData.brand = brandValue
        }

        var lenFilter = initLogic.shoesFilterFunction(searchData)
        if (lenFilter.length != 0){
            shoeSection.innerHTML = shoeCompiledTemplate({shoesList: initLogic.shoesFilterFunction(searchData)})
            
        } else {
            shoeSection.innerHTML = "No Results found!🤦🏾‍♂️"
            setTimeout(function(){
                displayShoes(shoeLocal)
            }, 3000)
        }
    })

// })
