function ShoesCatalogue(){

    var shoeData = {}

    function setShoeData(namePassed){
        shoeData = namePassed
    }

    function getShoeData(){
        return shoeData
    }

    function shoesFilterFunction(shoesFlit){
        var shoesFiltered = shoeData.filter(function(shoeData){
            var shoesFlitObjKeys = Object.keys(shoesFlit)
            var len = 0
            for(var i=0; i < shoesFlitObjKeys.length; i++){
                len += (shoeData[shoesFlitObjKeys[i]]  == shoesFlit[shoesFlitObjKeys[i]])
            } 
            if (len == shoesFlitObjKeys.length){
                return true
            }
        })
        // console.log(shoesFiltered)
        return shoesFiltered
    }
    // function


    return {
        shoesFilterFunction,
        setShoeData,
        getShoeData
    }
}