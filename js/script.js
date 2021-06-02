function setTheme(name) {
  localStorage.setItem("j", name);
  document.documentElement.className = name;
}

function toggleTheme() {
  if (localStorage.getItem("j") === "dark") {
    // prettier-ignore
    document.getElementById("switcher").innerHTML = "<a href='" + "javascript:toggleTheme()" + "'>don't click me :(</a>";
    setTheme("light");
    console.log("set theme to light, you weirdo :(");
  } else if (localStorage.getItem("j") === "light") {
    // prettier-ignore
    document.getElementById("switcher").innerHTML = "<a href='" + "javascript:toggleTheme()" + "'>click me :)</a>";
    setTheme("dark");
    console.log("set theme to dark, you are normal :)");
  }
}

/*function j() {
  if (localStorage.getItem("j") === "light") {
    setTheme("light");
    //prettier-ignore
    document.documentElement.getElementById("switcher").innerHTML = "hi"
    console.log("auto applied light :(");
  } else {
    setTheme("dark");
    // prettier-ignore
    document.getElementById("switcher").innerHTML = "not hi"
    console.log("auto applied dark :)");
  }
}*/

window.onload = function () {
  if (localStorage.getItem("j") === "light") {
    // prettier-ignore
    document.getElementById("switcher").innerHTML ="<a href='" + "javascript:toggleTheme()" + "'> click me :)</a>";
    setTheme("light");
    console.log("auto applied light :(");
  } else {
    // prettier-ignore
    document.getElementById("switcher").innerHTML = "<a href='"+"javascript:toggleTheme()"+"'>don't click me :(</a>" ;
    setTheme("dark");
    console.log("auto applied dark :)");
  }
};
