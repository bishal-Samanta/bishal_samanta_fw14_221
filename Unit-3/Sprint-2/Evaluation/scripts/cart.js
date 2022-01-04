let details = JSON.parse(localStorage.getItem("cartArr"));

console.log(details);
displayUi();

function displayUi() {
  document.querySelector("tbody").innerHTML = "";

  details.map(function (el, i) {
    //Craete Elements
    let tr = document.createElement("tr");
    let name = document.createElement("td");
    let price = document.createElement("td");
    let buttontd = document.createElement("td");
    let button = document.createElement("button");

    name.textContent = el.cname;
    price.textContent = el.cprice;

    button.textContent = "Remove Item";
    button.addEventListener("click", function () {
      console.log(i);
      removeTable(i);
    });

    //Append
    buttontd.append(button);
    tr.append(name, price, buttontd);
    document.querySelector("tbody").append(tr);
  });
}

function removeTable(i) {
  details.splice(i, 1);
  localStorage.setItem("cartArr", JSON.stringify(details));
  displayUi();
  totalPricefUN();
}

function totalPricefUN() {
  var sum = 0;
  details.map(function (el) {
    sum = sum + el.cprice;
  });

  document.querySelector("#totalPrice").textContent = `Total Price : ${sum}`;
}
totalPricefUN();

document.querySelector("#chkout").addEventListener("click", function () {
  window.location.href = "checkout.html";
});
