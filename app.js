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
  });
}
//! for the services div;
const service = document.querySelector(".services-h");
const listS = document.querySelectorAll("#lists-s");
for (let i = 0; i < 11; i++) {
  service.addEventListener("click", () => {
    listS[i].classList.toggle("hide-shop");
  });
}
const account = document.querySelector(".account-h");
const listA = document.querySelectorAll("#lists-a");
for (let i = 0; i < 3; i++) {
  account.addEventListener("click", () => {
    listA[i].classList.toggle("hide-shop");
  });
}
const store = document.querySelector(".store-h");
const listST = document.querySelectorAll("#lists-st");
for (let i = 0; i < 10; i++) {
  store.addEventListener("click", () => {
    listST[i].classList.toggle("hide-shop");
  });
}
const buss = document.querySelector(".buss-h");
const listB = document.querySelectorAll("#lists-b");
for (let i = 0; i < 2; i++) {
  buss.addEventListener("click", () => {
    listB[i].classList.toggle("hide-shop");
  });
}
