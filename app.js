const heading = document.querySelector(".shop-h");
const list = document.querySelectorAll("#lists-f");
// heading.addEventListener("click", () => {
//   list[0].classList.toggle("hide-shop");
//   list[1].classList.toggle("hide-shop");
//   list[2].classList.toggle("hide-shop");
//   list[3].classList.toggle("hide-shop");
//   list[4].classList.toggle("hide-shop");
//   list[5].classList.toggle("hide-shop");
//   list[6].classList.toggle("hide-shop");
//   list[7].classList.toggle("hide-shop");
//   list[8].classList.toggle("hide-shop");
//   list[9].classList.toggle("hide-shop");
//   list[10].classList.toggle("hide-shop");
// }); //? making the above code smaller by using for loop; below;
for (let i = 0; i < 10; i++) {
  heading.addEventListener("click", () => {
    list[i].classList.toggle("hide-shop");
    list[i].classList.toggle("trans");
  });
}
const six = document.querySelector(".six");
heading.addEventListener("click", () => {
  six.classList.toggle("active");
});
//! for the services div;
const two = document.querySelector(".two");
const service = document.querySelector(".services-h");
const listS = document.querySelectorAll("#lists-s");
for (let i = 0; i < 11; i++) {
  service.addEventListener("click", () => {
    listS[i].classList.toggle("hide-shop");
    listS[i].classList.toggle("trans");
    two.classList.toggle("active");
  });
}
const three = document.querySelector(".three");
const account = document.querySelector(".account-h");
const listA = document.querySelectorAll("#lists-a");
for (let i = 0; i < 3; i++) {
  account.addEventListener("click", () => {
    listA[i].classList.toggle("hide-shop");
    listA[i].classList.toggle("trans");
    three.classList.toggle("active");
  });
}
const store = document.querySelector(".store-h");
const listST = document.querySelectorAll("#lists-st");
const four = document.querySelector(".four");
for (let i = 0; i < 10; i++) {
  store.addEventListener("click", () => {
    listST[i].classList.toggle("hide-shop");
    listST[i].classList.toggle("trans");
  });
}
store.addEventListener("click", () => {
  four.classList.toggle("active");
});
const buss = document.querySelector(".buss-h");
const listB = document.querySelectorAll("#lists-b");
const five = document.querySelector(".seven");
for (let i = 0; i < 2; i++) {
  buss.addEventListener("click", () => {
    listB[i].classList.toggle("hide-shop");
    listB[i].classList.toggle("trans");
  });
}
buss.addEventListener("click", () => {
  five.classList.toggle("active");
});
//? the mobile top menu navbar:
const burger = document.querySelector(".burger");
const menuF = document.querySelector(".menu");
const menuS = document.querySelector(".menu-2");
const mobileMenu = document.querySelector(".mobile-menu");
const logo = document.querySelector(".logo");
burger.addEventListener("click", () => {
  menuF.classList.toggle("clicked");
  menuF.classList.toggle("clicked-1");
  menuS.classList.toggle("clicked");
  menuS.classList.toggle("clicked-2");
  burger.classList.toggle("moved");
  mobileMenu.classList.toggle("show-menu");
  logo.classList.toggle("bright");
});
