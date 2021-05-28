/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
// eslint-disable-next-line no-unused-vars
function ShoesCatalogue() {
  let shoeData = { };
  let cartStorage = [];
  let total = 0;

  function setShoeData(namePassed) {
    shoeData = namePassed;
  }

  function setCartStorrage(namePassed) {
    cartStorage = namePassed;
  }

  function getTotal() {
    return total;
  }

  function setTotal(name) {
    total = name;
  }

  function getShoeData() {
    return shoeData;
  }

  function getCartStorage() {
    return cartStorage;
  }

  function shoesFilterFunction(shoesFlit) {
    // eslint-disable-next-line array-callback-return
    // eslint-disable-next-line consistent-return
    const shoesFiltered = shoeData.filter((data) => {
      const shoesFlitObjKeys = Object.keys(shoesFlit);
      let len = 0;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < shoesFlitObjKeys.length; i++) {
        len += (data[shoesFlitObjKeys[i]] == shoesFlit[shoesFlitObjKeys[i]]);
      }
      if (len == shoesFlitObjKeys.length) {
        return true;
      }
    });
    return shoesFiltered;
  }

  function addShoesObject(namePassed) {
    // eslint-disable-next-line no-underscore-dangle
    const exist = shoeData.filter((data) => namePassed._id == data._id);
    if (exist.length != 0) {
      return shoeData;
    }
    shoeData.push({
      // eslint-disable-next-line no-underscore-dangle
      _id: namePassed._id,
      qty: namePassed.qty,
      brand: namePassed.brand,
      size: namePassed.size,
      color: namePassed.color,
      img: namePassed.img,
      price: namePassed.price,
      in_stock: namePassed.in_stock,
      prc: namePassed.prc,
    });
    setShoeData(shoeData);
    console.log(shoeData);
  }

  function shoesFilterCart(shoesFlit) {
    const shoesFiltered = cartStorage.filter((data) => {
      const shoesFlitObjKeys = Object.keys(shoesFlit);
      let len = 0;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < shoesFlitObjKeys.length; i++) {
        len += (data[shoesFlitObjKeys[i]] == shoesFlit[shoesFlitObjKeys[i]]);
      }
      if (len == shoesFlitObjKeys.length) {
        return true;
      }
    });
    return shoesFiltered;
  }

  function checkOut() {
    shoeData = shoeData.filter((shoes) => {
      while (shoes.qty != 0) {
        // eslint-disable-next-line no-plusplus
        shoes.qty--;
      // eslint-disable-next-line no-underscore-dangle
      } return shoes._id;
    });
    console.log(shoeData);
  }

  function removeItem(init) {
    const shoesToAdded = shoesFilterFunction({ _id: init })[0];
    const shoeFli = shoesFilterCart({ _id: init })[0];
    try {
      if (shoeFli.qty == 1) {
        total -= shoeFli.prc;
        // eslint-disable-next-line no-underscore-dangle
        // eslint-disable-next-line radix
        // eslint-disable-next-line no-underscore-dangle
        cartStorage = cartStorage.filter((shoe) => parseInt(init) !== shoe._id);
      } else {
        // eslint-disable-next-line no-plusplus
        shoeFli.qty--;
        shoeFli.price -= shoeFli.prc;
        total -= shoeFli.prc;
      }
    } finally {
      // eslint-disable-next-line no-plusplus
      shoesToAdded.in_stock++;
      // setShoeData(shoeData)
    }
    return true;
  }

  function addBtnCart(init) {
    const shoeAdded = shoesFilterFunction({ _id: init })[0];
    const shoeFli = shoesFilterCart({ _id: init })[0];

    try {
      if (shoeAdded.in_stock > 0) {
        shoeAdded.in_stock--;
        if (shoeAdded.qty > 0 && cartStorage.length !== 0) {
          shoeFli.qty++;
          shoeFli.price += shoeFli.prc;
          total += shoeFli.prc;
          console.log(shoeFli);
        } else {
          while (shoeAdded.price != shoeAdded.prc) {
            shoeAdded.price--;
          }
          total += shoeAdded.price;
          shoeAdded.qty++;
          cartStorage.push(shoeAdded);
        }
      }
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return true;
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
    setTotal,
  };
}
