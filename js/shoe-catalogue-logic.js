function ShoesCatalogue(){

    var shoeData = {}
    var cartStorage =  []

    var shoes;

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
        // var shoesToBeRemoved = []
        // shoesToBeRemoved = shoesFilterFunction({_id: init})[0]
        // console.log(shoesToBeRemoved)
        // console.log(typeof shoesToBeRemoved)
        // console.log(shoesToBeRemoved.shift())
        var shoesToAdded = shoesFilterFunction({_id: init})
        console.log(shoesToAdded)
        // try{
        //     cartStorage = cartStorage.filter(function(shoe){
        //         console.log(shoe)
        //         return parseInt(init) !== shoe._id
        //     })
        // } finally{
        //     shoesToAdded.in_stock++
        //     // setCartStorrage()
        //     setShoeData(shoeData)
        // }
        return true
    }

    function uid(){
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    

    function addBtnCart(init){
        // console.log(init)
        var shoeAdded = shoesFilterFunction({_id: init})[0]
        var shoeFli = shoesFilterCart({_id: init})[0]
        console.log(shoeFli)

        // console.log(shoeAdded)
        if (shoeAdded.in_stock > 0){
            shoeAdded.in_stock--
            var idf = uid()
         //s   console.log(idf)
            shoeAdded.newId = idf

            for(elem  in shoeAdded ){
                console.log(elem)
shoes = shoeAdded[elem]
            };
            console.log(typeof shoes + "      " +shoes)
            // if (shoeFli.length )
            if(!shoes === shoeFli.newId ){
                cartStorage.push(shoeAdded)

            }
            // cartStorage.push(shoes)
            // console.log(cartStorage)
        }
        setShoeData(shoeData)
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