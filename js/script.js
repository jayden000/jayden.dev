//i know this whole js file is janky pls don't call me out for being a bad dev :(

function setTheme(name) {
  localStorage.setItem("j", name);
  // don't judge i know this is very janky but shut up it works and i fixed my problem - j 2021-06-02
  let text = "lol";
  if (name === "light") {
    text = "<a onCLick='" + "javascript:toggleTheme()" + "'>click me :)</a>";
    document.querySelector("link[rel='shortcut icon']").href = "./img/j.png";
  }

  if (name === "dark") {
    text =
      "<a onClick='" + "javascript:toggleTheme()" + "'>don't click me :(</a>";
    document.querySelector("link[rel='shortcut icon']").href = "./img/j-2.png";
  }

  document.documentElement.className = name;
  document.getElementById("switcher").innerHTML = text;
}

function toggleTheme() {
  if (localStorage.getItem("j") === "dark") {
    setTheme("light");
    console.log("set theme to light, you weirdo :(");
  } else if (localStorage.getItem("j") === "light") {
    setTheme("dark");
    console.log("set theme to dark, you are normal :)");
  }
}

window.onload = function () {
  if (localStorage.getItem("j") === "light") {
    setTheme("light");
    console.log("auto applied light :(");
  } else {
    setTheme("dark");
    console.log("auto applied dark :)");
  }
};
