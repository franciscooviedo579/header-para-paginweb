document.addEventListener("DOMContentLoaded", () => {
  const menuImg = document.querySelector(".menu-img");
  const x = document.querySelector(".x");
  const menu = document.querySelector(".menu");

  menuImg.addEventListener("click", () => {
    menu.style.display = "block";
  });

  x.addEventListener("click", () => {
    menu.style.display = "none";
  });
});
