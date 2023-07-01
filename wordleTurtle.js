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
    titleNodes = document.querySelectorAll("div[class*=\"AppHeader-module_title\"]")
    titleNodes[0].textContent = "Turtle"
  }, timeout)
}

let deleteAdsArea = () => {
  setTimeout(function() {
    adsArea = document.getElementById("top")
    adsArea.remove()
  }, 3000)
}

let wordleTurtle = () => {
  clickPlayButton()
  closeHowToPlay()
  changeTitle()
  deleteAdsArea()
}

setTimeout(wordleTurtle, timeout)
