//i know this whole js file is janky pls don't call me out for being a bad dev :(

//jayden from 2021-07-15 at 06:09 ET, pls help me i can't sleep :(

function setTheme(name) {
  localStorage.setItem("j", name);
  // don't judge i know this is very janky but shut up it works and i fixed my problem - j 2021-06-02
  let text = "lol";
  if (name === "light") {
    text = "<a id='" + "switcher" + "'>click me :)</a>";
    document.querySelector("link[rel='shortcut icon']").href = "./img/j.png";
  }

  if (name === "dark") {
    text = "<a id='" + "switcher" + "'>don't click me :(</a>";
    document.querySelector("link[rel='shortcut icon']").href = "./img/j-2.png";
  }

  document.body.className = name;
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

function randomText() {
  let strings = [
    "good web design, i know. ",
    "much web design, very wow",
    "j.",
    ":)",
    ":(",
  ];

  let random = Math.floor(Math.random() * strings.length);
  document.getElementById("title").innerHTML = strings[random];
}

window.onload = function () {
  document.getElementById("title").onload = randomText();
  document.getElementById("switcher").addEventListener("click", toggleTheme);

  if (localStorage.getItem("j") === "light") {
    setTheme("light");
    console.log("auto applied light :(");
  } else {
    setTheme("dark");
    console.log("auto applied dark :)");
  }
};
