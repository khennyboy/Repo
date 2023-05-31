function toggletheme() {
  var checkbox = document.getElementById("toggle"); // accesing the input type checkbox by its id
  var root = document.querySelector(":root"); // accessing the root selector used in css
  var mode1 = document.getElementById("modelight");
  var mode2 = document.getElementById("modedark");
  if (checkbox.checked) {
    root.style.setProperty(
      "--bg-color",
      "#222"
    ); /* dark mode background-color */
    root.style.setProperty("--text-color", "#fff"); /* dark mode text-color */
    mode1.style.setProperty("display", "none");
    mode2.style.setProperty("display", "block");
  } else {
    root.style.setProperty(
      "--bg-color",
      "#f5f5f5"
    ); /* light mode background-color */
    root.style.setProperty("--text-color", "#333"); /* light mode text-color */
    mode1.style.setProperty("display", "block");
    mode2.style.setProperty("display", "none");
  }
}
