var active = true;
function changeLanguage() {
  var elements = document.querySelectorAll(".id, .en"); // Ambil class id & en
  elements.forEach(function (element) {
    if (active && element.classList.contains("en")) {
      element.style.display = "block";
    } else if (!active && element.classList.contains("id")) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
  active = !active;
}
