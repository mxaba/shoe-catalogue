function ShoesCatalogue(){

    var shoeData = {}
    var cartStorage =  []

    function setShoeData(namePassed){
        shoeData = namePassed
    }

    function setCartStorrage(namePassed){
        cartStorage = namePassed
    }

    function getShoeData(){
        return shoeData
    }

    function getCartStorage(){
        return cartStorage
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

    function addBtnCart(init){
        // console.log(init)
        var shoeAdded = shoesFilterFunction({_id: init})
        // console.log(shoeAdded)
        if (shoeAdded[0].in_stock > 0){
            shoeAdded[0].in_stock--
            shoeAdded[0].qty++
            cartStorage.push(shoeAdded[0])
        }
        setShoeData(shoeData)
        return true
    }

    function removeItem(init){
        var shoesToBeRemoved = shoesFilterFunction({_id: init})[0]
        if (shoesToBeRemoved.qty > 0){
            shoesToBeRemoved.in_stock++
            shoesToBeRemoved.qty--
            cartStorage.push(shoesToBeRemoved)
        }
        setShoeData(shoesData)
        return true
    }


    return {
        removeItem,
        getCartStorage,
        setCartStorrage,
        addBtnCart,
        shoesFilterFunction,
        setShoeData,
        getShoeData
    }
}