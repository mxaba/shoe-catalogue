// eslint-disable-next-line no-undef
const instance = ShoesCatalogue();
const localShoe = JSON.parse(localStorage.getItem("shoeCatalogue"));
const cartST = JSON.parse(localStorage.getItem("addToCart"));
// eslint-disable-next-line no-unused-vars
const checkOut = document.getElementById("checkOut");

const shoeCart = document.querySelector(".shoe-cart").innerHTML;
// eslint-disable-next-line no-undef
const shoeCartTemplate = Handlebars.compile(shoeCart);
let total = 0;
if (localStorage.total) {
  total = localStorage.getItem("total");
}

instance.setShoeData(localShoe);
instance.setCartStorrage(cartST);
instance.setTotal(parseFloat(total));

const disShoeCart = document.getElementById("shoeCart");
// eslint-disable-next-line no-unused-vars
const redirect = document.getElementById("redirect");
disShoeCart.innerHTML = shoeCartTemplate({ shoecart: cartST });
document.querySelector(".total").innerHTML = `Total: R ${parseFloat(total)}`;

// eslint-disable-next-line no-unused-vars
function removeItem(removeItem1) {
  if (instance.removeItem(removeItem1)) {
    localStorage.setItem("addToCart", JSON.stringify(instance.getCartStorage()));
    localStorage.setItem("shoeCatalogue", JSON.stringify(instance.getShoeData()));
    disShoeCart.innerHTML = shoeCartTemplate({ shoecart: cartST });
    localStorage.setItem("total", instance.getTotal());
    // eslint-disable-next-line radix
    document.querySelector(".total").innerHTML = `Total: R ${parseInt(instance.getTotal())}`;
  }
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

// if ()

document.getElementById("checkOut").addEventListener("click", () => {
  // eslint-disable-next-line no-alert
  alert("Thank you for shopping with us!🤝");
  setTimeout(() => {
    instance.checkOut();
    instance.setCartStorrage([]);
    localStorage.setItem("addToCart", JSON.stringify(instance.getCartStorage()));
    instance.setTotal(0);
    localStorage.setItem("total", instance.getTotal());
    localStorage.setItem("shoeCatalogue", JSON.stringify(instance.getShoeData()));
    window.location.href = "./";
  });
});
