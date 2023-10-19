const timeout = 1000

let clickPlayButton = () => {
  // If the "Play" button is present, try to click it
  setTimeout(function() {
    playBtns = document.querySelectorAll("button[data-testid*=\"Play\"]");
    playBtns[0].click();
  }, timeout)
}

let closeHowToPlay = () => {
  // if the "How to Play" screen comes up, try to get rid of it
  setTimeout(function() {
    howToPlay = document.querySelectorAll("dialog[data-testid*=\"modal-overlay\"]")
    if (howToPlay.length > 0) {
      howToPlay[0].click()
    }
  }, 3000)
}

let changeTitle = () => {
  // Change the title from "Wordle" to "Turtle"
  setTimeout(function() {
    titleNodes = document.querySelectorAll("h1[class*=\"AppHeader-module_title\"]")
    titleNodes[0].textContent = "Turtle, Turtle"
  }, timeout)

}

let deleteAdsArea = () => {
  setTimeout(function() {
    adsArea = document.getElementById("ad-top")
    adsArea.remove()
  }, 3000)
}

let addTurtleGif = () => {
  setTimeout(function() {
    rows = document.querySelectorAll("div[aria-label*=\"Row\"]")
    if (rows.length > 1) {
      for (row of rows) {
        for (const i of Array(5).keys()) {
          tile = row.childNodes[i].childNodes[0]
          tile.innerHTML = "<div><img src=\"https://media.tenor.com/c3RtOpdQTtoAAAAC/dana-carvey-turtle-face.gif\" width=57 height=57 style=\"border: 2px solid gray;\"></div>"
        }
      }
    }
  }, timeout)
}

let wordleTurtle = () => {
  clickPlayButton()
  closeHowToPlay()
  changeTitle()
  deleteAdsArea()
  addTurtleGif()
}

setTimeout(wordleTurtle, timeout)
