/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
// document.addEventListener('DOMContentLoaded', function(){
const shoeCatalogueTemplate = document.querySelector(".shoe-catalogue-template").innerHTML;
// eslint-disable-next-line no-undef
const shoeCompiledTemplate = Handlebars.compile(shoeCatalogueTemplate);

const shoeSection = document.querySelector(".shoe-section");
const reset = document.querySelector(".reset");

// eslint-disable-next-line no-undef
const initLogic = ShoesCatalogue();
let shoeLocal = {};

if (localStorage.shoeCatalogue) {
  console.log("shoeCatalogue");
  shoeLocal = JSON.parse(localStorage.getItem("shoeCatalogue"));
} else {
  console.log("Data Object");
  // eslint-disable-next-line no-undef
  shoeLocal = Data();
}

let total = 0;
if (localStorage.total) {
  total = localStorage.getItem("total");
}
initLogic.setTotal(parseFloat(total));
let cartST = {};
let cartSTArray = [];
if (localStorage.addToCart) {
  // eslint-disable-next-line no-unused-vars
  cartST = JSON.parse(localStorage.getItem("addToCart"));
  cartSTArray = JSON.parse(localStorage.getItem("addToCart"));
}

if (cartSTArray.length !== 0) {
  initLogic.setCartStorrage(cartSTArray);
}
initLogic.setShoeData(shoeLocal);

shoeLocal = shoeLocal.filter((shoe) => {
  // console.log(shoe)
  if (shoe.in_stock > 0) {
    return shoe._id;
  }
});

// eslint-disable-next-line no-use-before-define
displayShoes(shoeLocal);

function displayShoes(array) {
  shoeSection.innerHTML = shoeCompiledTemplate({ shoesList: array });
  // console.log(shoeCompiledTemplate({shoesList: initLogic.getShoeData()} ))
}

// eslint-disable-next-line no-unused-vars
function addBtnCart(init) {
  if (initLogic.addBtnCart(init)) {
    localStorage.setItem("addToCart", JSON.stringify(initLogic.getCartStorage()));
    localStorage.setItem("shoeCatalogue", JSON.stringify(initLogic.getShoeData()));
    localStorage.setItem("total", initLogic.getTotal());
    shoeLocal = shoeLocal.filter((shoe) => {
      // console.log(shoe)
      if (shoe.in_stock > 0) {
        return shoe._id;
      }
    });
    displayShoes(shoeLocal);
  }
}

reset.addEventListener("click", () => {
  localStorage.clear();
  // eslint-disable-next-line no-restricted-globals
  location.reload();
});

document.querySelector(".search").addEventListener("click", () => {
  const colorValue = document.getElementById("color").value;
  const brandValue = document.getElementById("brand").value;
  const sizeValue = document.getElementById("size").value;

  const searchData = {};

  if (colorValue !== "") {
    searchData.color = colorValue;
  } if (sizeValue !== "") {
    searchData.size = sizeValue;
  } if (brandValue !== "") {
    searchData.brand = brandValue;
  }

  const lenFilter = initLogic.shoesFilterFunction(searchData);
  if (lenFilter.length !== 0) {
    // eslint-disable-next-line max-len
    shoeSection.innerHTML = shoeCompiledTemplate({ shoesList: initLogic.shoesFilterFunction(searchData) });
  } else {
    shoeSection.innerHTML = "No Results found!🤦🏾‍♂️";
    setTimeout(() => {
      displayShoes(shoeLocal);
    }, 3000);
  }
});

// })
