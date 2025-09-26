document.addEventListener("DOMContentLoaded", function () {
  let images = document.querySelectorAll(".image");
  images.forEach((image) => {
    image.addEventListener("click", function () {
      let randomId = generateRandomId();
      image.src = `https://picsum.photos/id/${randomId}/200/300`;
    });
  });
});

function generateRandomId() {
  return Math.floor(Math.random() * 200) + 1;
}
