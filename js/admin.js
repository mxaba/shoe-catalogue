/* eslint-disable block-scoped-var */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const instance = ShoesCatalogue();
// eslint-disable-next-line no-var
var localShoe;

if (localStorage.shoeCatalogue) {
  // eslint-disable-next-line vars-on-top
  localShoe = JSON.parse(localStorage.getItem("shoeCatalogue"));
} else {
  localShoe = Data();
}

// eslint-disable-next-line block-scoped-var
instance.setShoeData(localShoe);

console.log(localShoe);

const addButton = document.getElementById("addButton");
const notadded = document.getElementById("notadded");

addButton.addEventListener("click", () => {
  const brand = document.getElementById("brand").value;
  const color = document.getElementById("color").value;
  const size = document.getElementById("size").value;
  const stock = document.getElementById("stock").value;
  const price = document.getElementById("price").value;
  const img = document.getElementById("img").value;
  const qty = 0;

  const addShoesData = {};
  if (brand !== "" && color !== "" && size !== "" && stock !== "" && img !== "") {
    addShoesData.brand = brand;
    addShoesData.prc = parseFloat(price);
    addShoesData.color = color;
    // eslint-disable-next-line radix
    addShoesData.size = parseInt(size);
    // eslint-disable-next-line radix
    addShoesData.in_stock = parseInt(stock);
    // eslint-disable-next-line no-underscore-dangle
    addShoesData._id = instance.getShoeData().length + 1;
    addShoesData.price = parseFloat(price);
    addShoesData.img = img;
    // eslint-disable-next-line radix
    addShoesData.qty = parseInt(qty);
    instance.addShoesObject(addShoesData);
    localStorage.setItem("shoeCatalogue", JSON.stringify(instance.getShoeData()));
    // eslint-disable-next-line no-alert
    alert("Shoe was added and now you will be redirected to Shoe Catalogue!🤝");
    window.location.href = "./";
  } else {
    notadded.innerHTML = "Please make sure that all the fields are entered!!!💁🏾‍♂️";
    setTimeout(() => {
      notadded.innerHTML = "";
    }, 3000);
  }
});
