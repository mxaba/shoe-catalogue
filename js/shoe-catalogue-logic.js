function ShoesCatalogue(){

    var shoeData = {}

    function setShoeData(namePassed){
        shoeData = namePassed
    }

    function getShoeData(){
        return shoeData
    }

    function shoesFilterFunction(shoesFlit){
        var shoesFiltered = shoeData.filter(function(data){
            var shoesFlitObjKeys = Object.keys(shoesFlit)
            var len = 0
            for(var i=0; i < shoesFlitObjKeys.length; i++){
                len += (data[shoesFlitObjKeys[i]]  == shoesFlit[shoesFlitObjKeys[i]])
            } 
            if (len == shoesFlitObjKeys.length){
                return true
            }
        })
        // console.log(shoesFiltered)
        return shoesFiltered
    }
    // function

    function addBtnCart(init){
        var cartStorage =  [] || JSON.parse(localStorage.getItem('addToCart'))
        // console.log(init)
        var shoeAdded = shoesFilterFunction({_id: init})
        // console.log(shoeAdded)
        if (shoeAdded[0].in_stock > 0){
            shoeAdded[0].in_stock--
            cartStorage.push(shoeAdded[0])
        }
        setShoeData(shoeData)
        localStorage.setItem('shoeCatalogue', JSON.stringify(shoeData));
        return shoeData
    }


    return {
        addBtnCart,
        shoesFilterFunction,
        setShoeData,
        getShoeData
    }
}