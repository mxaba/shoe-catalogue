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

    function shoesFilterCart(shoesFlit){
        var shoesFiltered = cartStorage.filter(function(data){
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

    function removeItem(init){
        var shoesToAdded = shoesFilterFunction({_id: init})[0]
        try{
            cartStorage = cartStorage.filter(function(shoe){
                if (shoe.qty == 1){
                    return parseInt(init) !== shoe._id
                } else{
                    // shoe.price -= shoe.price
                    shoe.qty--
                    return shoe._id
                }
            })
        } finally{
            shoesToAdded.in_stock++
            setShoeData(shoeData)
        }
        return true
    }

    function uid(){
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    

    function addBtnCart(init){
        // console.log(init)
        var shoeAdded = shoesFilterFunction({_id: init})[0]
        var shoeFli = shoesFilterCart({_id: init})[0]

        try{
            if (shoeAdded.in_stock > 0){
                shoeAdded.in_stock--
                // shoeAdded.qty++
                if (shoeAdded.qty > 0){
                    cartStorage = cartStorage.filter(function(shoe){
                            // shoe.price = shoe.price * shoe.qty
                            shoe.qty++
                            return shoe._id
                    })
                } else {
                    shoeAdded.qty++
                    cartStorage.push(shoeAdded)
                }
            }
        } finally{
            setShoeData(shoeData)
            return true
        }
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