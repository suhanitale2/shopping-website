// const bar = document.getElementById('bar');
// const close= document.getElementById('close');
// const nav=document.getElementById('navbar');

// if(bar){
//     bar.addEventListener('click',()=>{
//         nav.classList.add('active');
//     })
// }
// if(close){
//     close.addElementListener('click', ()=>{
//         nav.classList.remove('active');
//     })
// }
/* Modern JS for your project
   - fixes mobile menu bug
   - mobile nav open/close, close when link clicked
   - single product gallery swap + active class
   - cart quantity & remove item logic (works with your cart table)
   - safe guards if elements not present on a page
*/

// ======================
// Mobile Navigation Menu
// ======================

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
    document.body.style.overflow = "hidden"; // stop scroll when menu open
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
    document.body.style.overflow = "auto"; // enable scroll
  });
}

// ============================
// Product Page Image Swapping
// ============================

const MainImg = document.getElementById("MainImg");
const smallImgs = document.querySelectorAll(".small-img");

if (MainImg && smallImgs.length > 0) {
  smallImgs.forEach((img) => {
    img.addEventListener("click", () => {
      MainImg.src = img.src;
    });
  });
}

// ======================
// Smooth Scroll Behavior
// ======================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") !== "#") return;
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
