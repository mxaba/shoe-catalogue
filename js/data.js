function data(){
    var shoesObject = [
        { brand: "Vans", size:10, color:"Black",  img: "", price:500, stock:""}, { brand: "Vans", size:5, color:"Grey",  img: "", price:890, stock:""},
        { brand: "Vans", size:2, color:"White",  img: "", price:550, stock:""}, { brand: "Vans", size:3, color:"Blue",  img: "", price:350, stock:""},
        { brand: "Vans", size:6, color:"Red",  img: "", price:760, stock:""}, { brand: "Vans", size:4, color:"Green",  img: "", price:450, stock:""},
        { brand: "All-Star", size:5, color:"Black",  img: "", price:"", stock:""}, { brand: "All-Star", size:5, color:"Grey",  img: "", price:"", stock:""},
        { brand: "All-Star", size:2, color:"White",  img: "", price:"", stock:""}, { brand: "All-Star", size:3, color:"Blue",  img: "", price:"", stock:""},
        { brand: "All-Star", size:7, color:"Red",  img: "", price:"", stock:""}, { brand: "Nike", size:9, color:"Green",  img: "", price:"", stock:""},
        { brand: "Nike", size:3, color:"Black",  img: "", price:"", stock:""}, { brand: "Nike", size:10, color:"Grey",  img: "", price:"", stock:""},
        { brand: "Nike", size:4, color:"Red",  img: "", price:"", stock:""}, { brand: "Jordan", size:9, color:"Green",  img: "", price:"", stock:""},
        { brand: "Jordan", size:9, color:"White",  img: "", price:"", stock:""}, { brand: "Jordan", size:4, color:"Blue",  img: "", price:"", stock:""},
        { brand: "Puma", size:10, color:"Red",  img: "", price:"", stock:""}, { brand: "Puma", size:5, color:"Green",  img: "", price:"", stock:""},
        { brand: "Puma", size:9, color:"Black",  img: "", price:"", stock:""}
    ]

    function getShoeObject(){
        return shoesObject
    }

    return {
        getShoeObject
    }
}