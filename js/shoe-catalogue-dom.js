document.addEventListener('DOMContentLoaded', function(){
    var shoeCatalogueTemplate = document.querySelector('.shoe-catalogue-template').innerHTML
    var shoeCompiledTemplate = Handlebars.compile(shoeCatalogueTemplate)

    var shoeSection = document.querySelector('.shoe-section')

    var initLogic = ShoesCatalogue()

    displayShoes()

    function displayShoes(){
        shoeSection.innerHTML = shoeCompiledTemplate({shoesList: initLogic.getShoeData()} )
        console.log(shoeCompiledTemplate({shoesList: initLogic.getShoeData()} ))
    }

})
