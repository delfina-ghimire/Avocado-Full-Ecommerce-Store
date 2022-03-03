"use strict";
let mainImg = document.getElementById("main-img");
let smImg = document.querySelectorAll(".sm-img");
let proItem = document.querySelectorAll(".product-item");

proItem[0].addEventListener("click", function () {
  window.location.href = "sproduct.html";
});

for (let i = 0; i <= smImg.length; i++) {
  smImg[i].addEventListener("click", function () {
    mainImg.src = smImg[i].src;
  });
}
