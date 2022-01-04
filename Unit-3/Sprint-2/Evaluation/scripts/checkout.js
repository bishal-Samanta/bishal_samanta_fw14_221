console.log("Test");

document.querySelector("#myform").addEventListener("submit", submitFun);

function submitFun(event) {
  event.preventDefault();

  let name = document.querySelector("#name").value;
  let adds1 = document.querySelector("#add1").value;
  let adds2 = document.querySelector("#add2").value;
  let cityname = document.querySelector("#city").value;
  let pinname = document.querySelector("#pin").value;

  if (
    name != "" &&
    adds1 != "" &&
    adds2 != "" &&
    cityname != "" &&
    pinname != ""
  ) {
    setTimeout(function () {
      alert(`${name} Your Order is Accepted`);
    }, 0);

    setTimeout(function () {
      alert("Your order is being cooked");
      console.log("test111");
    }, 3000);

    setTimeout(function () {
      alert("Your order is ready");
    }, 8000);

    setTimeout(function () {
      alert("Order out for delivery");
    }, 10000);

    setTimeout(function () {
      alert("Order delivered");
    }, 12000);
  } else {
    alert("Please Fill all the details");
  }
}
