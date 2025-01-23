function switchTheme() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
    html.classList.add("dark")
  } else {
    html.classList.add("light")
    html.classList.remove("dark")
  }
}

function showAbout() {
  const a = document.getElementById("about")
  if (a.classList.contains("hidden")) {
    a.classList.remove("hidden")
    a.classList.add("visible")
  } else {
    a.classList.add("hidden")
    a.classList.remove("visible")
  }
}
