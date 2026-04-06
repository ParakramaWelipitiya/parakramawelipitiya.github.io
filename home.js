//scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.onclick = e => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  };
});

//slider
document.querySelectorAll(".slider").forEach(slider => {
  let imgs = slider.querySelectorAll("img");
  let i = 0;
  imgs[i].classList.add("active");

  setInterval(() => {
    imgs[i].classList.remove("active");
    i = (i + 1) % imgs.length;
    imgs[i].classList.add("active");
  }, 2500);
});