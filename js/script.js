function setTheme(name) {
  localStorage.setItem("j", name);
  document.documentElement.className = name;
}

function toggleTheme() {
  if (localStorage.getItem("j") === "dark") {
    setTheme("light");
    console.log("set theme to light, you weirdo :(");
  } else {
    setTheme("dark");
    console.log("set theme to dark, you are normal :)");
  }
}

function j() {
  if (localStorage.getItem("j") === "light") {
    setTheme("light");
    console.log("auto applied light :(");
  } else {
    setTheme("dark");
    console.log("auto applied dark :)");
  }
}

window.onload = j();
