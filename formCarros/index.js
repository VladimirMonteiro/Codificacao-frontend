document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("carForm");
  const openSidebar = document.querySelector(".changeColor");
  const sidebar = document.querySelector(".sidebar");
  const fontSizeSelect = document.getElementById("fontSize");
  const fontStyleSelect = document.getElementById("textStyle");
  const body = document.body;

  let colorOptions = [
    "#D0E7FF", // azul clarinho
    "#D0FFD6", // verde clarinho
    "#FFF1D6", // pêssego clarinho
    "#FFD6E0", // rosa clarinho
    "#E6D6FF", // lilás clarinho
    "#FFFAD6", // amarelo clarinho
    "#D6FFF4", // aqua clarinho
    "#D6E4FF", // azul suave
    "#FFF6D6", // creme suave
    "#E8FFF0", // verde suave
    "#FFF" // branco
  ];

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    let data = {};
    let isValid = true;

    formData.forEach((value, key) => {
      if (!validateField(form.elements[key])) {
        isValid = false;
      } else {
        console.log(key, value);
        data[key] = value;
      }
    });

    if (isValid) {
      localStorage.setItem("carData", JSON.stringify(data));
      data = {};
      window.location.href = "FinishForm.html";
    }
  });

  openSidebar.addEventListener("click", () => {
    sidebar.style.display =
      sidebar.style.display === "block" ? "none" : "block";
  });

  function validateField(input) {
    if (!input.value.trim()) {
      if (input.type !== "file" && input.type !== "checkbox") {
        input.style.borderColor = "red";
        input.placeholder = "Este campo é obrigatório";
      }
      input.classList.add("error");

      return false;
    } else {
      input.style.borderColor = "";
      input.classList.remove("error");
      return true;
    }
  }

  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }

  function showColorOptions() {
    colorOptions.forEach((color) => {
      const colorContainer = document.querySelector(".colorsContainer");
      const colorDiv = document.createElement("div");
      colorContainer.appendChild(colorDiv);
      colorDiv.style.backgroundColor = color;
      colorDiv.className = "circle";
      colorDiv.addEventListener("click", () => {
        changeBackgroundColor(color);
      });
    });
  }

  showColorOptions();

  fontSizeSelect.addEventListener("change", function () {
    body.style.fontSize = this.value;
  });

  fontStyleSelect.addEventListener("change", function () {
    body.style.fontFamily = this.value;
  });
});
