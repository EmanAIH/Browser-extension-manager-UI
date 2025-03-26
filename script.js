// Light and Dark Mode Toggle

const sunBtn = document.querySelector(".sun-logo");

sunBtn.addEventListener("click", () => {
  console.log("clicked");
  document.body.classList.toggle("light");
})

console.log(document.querySelector(".sun-logo"));
