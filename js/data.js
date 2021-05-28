// eslint-disable-next-line no-unused-vars
function Data() {
  const shoesObject = [
    {
      _id: 1, qty: 0, total: 0, brand: "Vans", size: 10, color: "Black", img: "https://thumbs.dreamstime.com/b/brand-new-black-white-vans-old-skool-shoes-box-pavia-italy-november-brand-new-black-white-vans-old-skool-shoes-168876419.jpg", price: 800, in_stock: 10, prc: 800,
    },
    {
      _id: 2, qty: 0, total: 0, brand: "Vans", size: 5, color: "Grey", img: "https://images.vans.com/is/image/VansEU/VN0A4BV5195-HERO?$PDP-FULL-IMAGE$", price: 890, in_stock: 4, prc: 890,
    },
    {
      _id: 3, qty: 0, total: 0, brand: "All-Star", size: 5, color: "Black", img: "https://cdn.shopify.com/s/files/1/1536/3179/products/9AF03769-9CA7-4446-B541-D82811FD7CC7_1024x1024.jpg?v=1578161080", price: 600, in_stock: 25, prc: 600,
    },
    {
      _id: 4, qty: 0, total: 0, brand: "All-Star", size: 5, color: "Grey", img: "https://www.studio-88.co.za/media/product/41e/converse-all-star-chuck-taylor-hi-mens-wolf-grey-all89wg-f6c.jpg", price: 600, in_stock: 7, prc: 600,
    },
    {
      _id: 5, qty: 0, total: 0, brand: "Puma", size: 10, color: "Red", img: "https://pbs.twimg.com/media/EV1ZD0IWoAEO3Ci.jpg", price: 1100, in_stock: 1, prc: 1100,
    },
    {
      _id: 6, qty: 0, total: 0, brand: "Puma", size: 5, color: "Green", img: "https://i.pinimg.com/736x/69/32/4b/69324bfdc6ac6369bf31db4910c73d5e.jpg", price: 600, in_stock: 40, prc: 600,
    },
    {
      _id: 7, qty: 0, total: 0, brand: "All-Star", size: 2, color: "White", img: "https://images.asos-media.com/products/converse-chuck-taylor-all-star-ox-white-sneakers/12649327-1-opticalwhite?$XXL$&wid=513&fit=constrain", price: 400, in_stock: 25, prc: 400,
    },
    {
      _id: 8, qty: 0, total: 0, brand: "All-Star", size: 3, color: "Blue", img: "https://footwearnews.com/wp-content/uploads/2020/11/converse-x-ambush-ctas-duck-boot-and-chuck-70-fuzzy-4_original-e1605882204603.jpg?w=700&h=437&crop=1", price: 450, in_stock: 17, prc: 450,
    },
    {
      _id: 9, qty: 0, total: 0, brand: "All-Star", size: 7, color: "Red", img: "https://footwearnews.com/wp-content/uploads/2019/02/converse.jpg", price: 800, in_stock: 50, prc: 800,
    },
    {
      _id: 10, qty: 0, total: 0, brand: "Nike", size: 9, color: "Green", img: "https://imgix.bustle.com/uploads/image/2021/3/1/736e8714-934a-4c1c-93a3-fa998f8b89ce-screen-shot-2021-03-01-at-120602-pm.png?w=757&fit=crop&crop=faces&auto=format%2Ccompress", price: 1000, in_stock: 12, prc: 1000,
    },
    {
      _id: 11, qty: 0, total: 0, brand: "Vans", size: 2, color: "White", img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-clean-vans-shoes-1558648863.png", price: 550, in_stock: 5, prc: 550,
    },
    {
      _id: 12, qty: 0, total: 0, brand: "Vans", size: 3, color: "Blue", img: "https://images.squarespace-cdn.com/content/5d95ed3e63895e4db9711f1e/1597795397712-G4Z03DYZZNGM8FFAMBA0/22aa7dc01387b4cd6224fee34a8d107fb5b93847_14867ebd0e15db95077a1e9d09752523e9befa58_twitter.jpg?content-type=image%2Fjpeg", price: 350, in_stock: 8, prc: 350,
    },
    {
      _id: 13, qty: 0, total: 0, brand: "Nike", size: 3, color: "Black", img: "https://sneakernews.com/wp-content/uploads/2019/10/nike-air-barrage-mid-triple-black-AT7847-002-6.jpg", price: 400, in_stock: 10, prc: 400,
    },
    {
      _id: 14, qty: 0, total: 0, brand: "Nike", size: 10, color: "Grey", img: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F02%2Fnike-air-max-90-essential-grey-social.jpg?w=960&cbr=1&q=90&fit=max", price: 1100, in_stock: 43, prc: 1100,
    },
    {
      _id: 15, qty: 0, total: 0, brand: "Nike", size: 4, color: "Red", img: "https://cdn.shopify.com/s/files/1/0255/9429/8467/products/12-09-2014_nike_airhuaracheqslovehate_unired_black_1_1000x1000.jpg?v=1598754981", price: 1500, in_stock: 35, prc: 1500,
    },
    {
      _id: 16, qty: 0, total: 0, brand: "Jordan", size: 9, color: "Green", img: "https://i.pinimg.com/originals/14/10/f2/1410f2a1f8e756b0a49f91bb7db7fee1.jpg", price: 1000, in_stock: 67, prc: 1000,
    },
    {
      _id: 17, qty: 0, total: 0, brand: "Jordan", size: 9, color: "White", img: "https://images.solecollector.com/complex/images/c_crop,h_1092,w_1942,x_32,y_563/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/jarfltzff0wmrmszhm3q/air-jordan-4-retro-white-oreo-ct8527-100-pair", price: 1000, in_stock: 4, prc: 1000,
    },
    {
      _id: 18, qty: 0, total: 0, brand: "Jordan", size: 4, color: "Blue", img: "https://houseofheat.co/app/uploads/2020/11/air-jordan-4-university-blue-ct8527-400-release-date-1.jpg", price: 500, in_stock: 31, prc: 500,
    },
    {
      _id: 19, qty: 0, total: 0, brand: "Vans", size: 6, color: "Red", img: "https://i.pinimg.com/originals/5f/b7/0c/5fb70c32d8d5860a5efd45dfa0387e38.jpg", price: 760, in_stock: 20, prc: 760,
    },
    {
      _id: 20, qty: 0, total: 0, brand: "Puma", size: 9, color: "White", img: "https://www.mixerfoodepizza.com/images/k/puma%20cali%20women-167hlr.jpg", price: 1000, in_stock: 9, prc: 1000,
    },
  ];

  return shoesObject;
}
