const vMegaMenu = document.getElementById("mega-menu");
const vOtherLinks = document.getElementById("otherLinks");
const vInp = document.getElementById("inp-email");

let isClicked = true;

vOtherLinks.addEventListener("click", () => {
  if (isClicked) {
    setTimeout(() => {
      vMegaMenu.style.display = "flex";
      isClicked = false;
      setTimeout(() => {
        vMegaMenu.style.opacity = 1;
        vMegaMenu.style.top = `calc(100% + 1px)`;
      }, 200);
    }, 200);
  } else {
    setTimeout(() => {
      vMegaMenu.style.opacity = 0;
      vMegaMenu.style.top = `calc(100% + 50px)`;
      setTimeout(() => {
        vMegaMenu.style.display = "none";
        isClicked = true;
      }, 150);
    }, 200);
  }
  vMegaMenu.addEventListener("mouseleave", () => {
    setTimeout(() => {
      vMegaMenu.style.opacity = 0;
      setTimeout(() => {
        vMegaMenu.style.display = "none";
      }, 150);
    }, 200);
  });
});

vInp.addEventListener("click", () => {
  if (isClicked) {
    vInp.setAttribute("placeholder", "");
    isClicked = false;
  } else {
    vInp.addEventListener("mouseleave", () => {
      vInp.setAttribute("placeholder", "Enter Your Email");
      isClicked = true;
    });
  }
});
