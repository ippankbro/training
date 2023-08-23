const submitBtn = document.getElementById("submit");
const closeBtn = document.getElementById("close");
const popup = document.querySelector(".popup-container");

submitBtn.addEventListener("click", () => {
  popup.classList.add("popup-active");
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("popup-active");
});
