const btnMenu = document.querySelector("#btnMenu");
const mobileMenu = document.querySelector("#mobile-menu");
const menuIcon = document.querySelector("#menuIcon");

btnMenu.addEventListener("click", (e) => {
  if (mobileMenu.classList.contains("hidden")) {
    switchIcons();
    mobileMenu.classList.remove("hidden");
    return mobileMenu.classList.add("flex");
  }
  switchIcons();
  mobileMenu.classList.remove("flex");
  return mobileMenu.classList.add("hidden");
});

const switchIcons = () => {
  if (mobileMenu.classList.contains("hidden")) {
    return (menuIcon.src = "assets/img/close.svg");
  }
  return (menuIcon.src = "assets/img/menu.svg");
};
