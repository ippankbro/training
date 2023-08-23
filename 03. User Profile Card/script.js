const toggleHeart = document.getElementById("heart");

toggleHeart.addEventListener("click", () => {
  toggleHeart.classList.toggle("fa-solid");

  toggleHeart.style.color =
    toggleHeart.classList == "fa-regular fa-heart fa-solid" ? "red" : "white";
});
