console.log("Test");

//www.themealdb.com/api/json/v1/1/random.php

let arr = [];

let url = "https://www.themealdb.com/api/json/v1/1/search.php?f=e";

// fetch(url)
// .then(function(res){
//     return res.json();
// })
// .then(function(res){
//     console.log(res);
// })
// .catch(function(error){
//     console.log(error)
// })

setTimeout(function () {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      //console.log(res);
      //console.log(res);
      displayUi(res.meals);
    })
    .catch(function (error) {
      console.log(error);
    });
}, 2000);

// fetch(url)
// .then(function(res){
//     return res.json();
// })
// .then(function(res){
//     console.log(res);
// })
// .catch(function(error){
//     console.log(error)
// })

function displayUi(arr) {
  // console.log(arr[0].strMeal)
  // console.log(arr[0].strMealThumb)
  arr.map(function (el) {
    //Create Element
    let div = document.createElement("div");
    let name = document.createElement("p");
    let img = document.createElement("img");
    let btn = document.createElement("button");
    let price = document.createElement("p");

    //Add value
    name.textContent = `Name: ${el.strMeal}`;
    img.src = el.strMealThumb;

    //Price
    //let randprice = Math.floor(100 + Math.random() * )

    function getRandomValue(min, max) {
      return Math.random() * (max - min) + min;
    }
    let priceValue = Math.round(getRandomValue(100, 501));
    //console.log(priceValue);

    price.textContent = `Price: ${priceValue}`;

    btn.textContent = "Add To Cart";

    div.append(img, name, price, btn);

    document.querySelector("#showMenu").append(div);

    btn.addEventListener("click", function () {
      var obj = {
        cname: el.strMeal,
        cimg: el.strMealThumb,
        cprice: priceValue,
      };

      addtocart(obj);
    });
  });
}

let cartArr = JSON.parse(localStorage.getItem("cartArr")) || [];
function addtocart(obj) {
  //console.log("Test");
  cartArr.push(obj);
  document.querySelector("#cartNum").textContent = `Cart : ${cartArr.length}`;
  console.log(cartArr);
  localStorage.setItem("cartArr", JSON.stringify(cartArr));
}
console.log(cartArr);

document.querySelector("#cartNum").textContent = `Cart : ${cartArr.length}`;

document.querySelector("#cartNum").addEventListener("click", function () {
  window.location.href = "cart.html";
});
