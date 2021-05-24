function ShoesCatalogue(){

    var shoeData = {}
    var cartStorage =  []
    var total = 0

    function setShoeData(namePassed){
        shoeData = namePassed
    }

    function setCartStorrage(namePassed){
        cartStorage = namePassed
    }

    function getTotal(){
        return total
    }

    function setTotal(name){
        total = name
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
        return shoesFiltered
    }

    function addShoesObject(namePassed){
        var exist = shoeData.filter(function(data){
            return namePassed._id == data._id
        }) 
        if(exist.length != 0) {
            return shoeData
        } else {
            shoeData.push({
                _id: namePassed._id,
                qty: namePassed.qty,
                brand: namePassed.brand,
                size: namePassed.size,
                color: namePassed.color,
                img: namePassed.img,
                price: namePassed.price,
                in_stock: namePassed.in_stock,
                prc: namePassed.prc
            })
            setShoeData(shoeData)
            console.log(shoeData)
        }
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
        return shoesFiltered
    }

    function checkOut(){
        shoeData = shoeData.filter(function(shoes){
            while (shoes.qty != 0){
                shoes.qty--
            } return shoes._id
        })
        console.log(shoeData)
    }

    function removeItem(init){
        var shoesToAdded = shoesFilterFunction({_id: init})[0]
        var shoeFli = shoesFilterCart({_id: init})[0]
        try{

            if (shoeFli.qty == 1){
                total -= shoeFli.prc
                cartStorage = cartStorage.filter(function(shoe){
                    return parseInt(init) !== shoe._id
                })
            } else{
                shoeFli.qty--
                shoeFli.price -= shoeFli.prc
                total -= shoeFli.prc
                shoesToAdded.in_stock++
        }
        } finally{
            shoesToAdded.in_stock++
            // setShoeData(shoeData)
        }
        return true
    }

    function uid(){
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    

    function addBtnCart(init){
        var shoeAdded = shoesFilterFunction({_id: init})[0]
        var shoeFli = shoesFilterCart({_id: init})[0]

        try{
            if (shoeAdded.in_stock > 0){
                shoeAdded.in_stock--
                if (shoeAdded.qty > 0 && cartStorage.length !== 0 ){
                    shoeFli.qty++
                    shoeFli.price += shoeFli.prc
                    total += shoeFli.prc
                    console.log(shoeFli)
                    
                } else {
                    while(shoeAdded.price != shoeAdded.prc){
                        shoeAdded.price--
                    }
                    total += shoeAdded.price
                    shoeAdded.qty++
                    cartStorage.push(shoeAdded)
                }
            }
        } finally{
            return true
        }
    }


    return {
        addShoesObject,
        removeItem,
        getCartStorage,
        setCartStorrage,
        addBtnCart,
        shoesFilterFunction,
        setShoeData,
        getShoeData,
        checkOut,
        getTotal,
        setTotal
    }
}