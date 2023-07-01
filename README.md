# wordle-turtle
![Animated gif of the Turtle character](https://github.com/bxbrenden/wordle-turtle/blob/main/assets/wordle-turtle-fast.gif)

A Firefox extension that came to me in a dream.

## Explanation
I do the Wordle every morning right when I wake up.
While I was still dreaming, my brain somehow mish-mashed "Wordle" together with the phrase "Turtle, Turtle" from [The Master of Disguise](https://en.wikipedia.org/wiki/The_Master_of_Disguise).

I imagined a Firefox extension that would replace every letter tile with a gif of Dana Carvey as the turtle man.

I woke up laughing, so I sat down and prototyped it. It works poorly (using the JavaScript `setTimeout` function blindly) and will probably break soon, but I gave myself a good chuckle.

## Results
![A before-and-after picture showing the use of the wordle-turtle Firefox Extension](https://github.com/bxbrenden/wordle-turtle/blob/main/assets/before-and-after.png)

## Installation
If you want to install this locally for fun:
1. Clone this repository.
2. Open Firefox.
3. Type `about:debugging` into the URL bar and hit `enter`.
4. Click the `This Firefox` link on the left-hand menu.
5. Under the `Temporary Extensions` section, click `Load Temporary Add-on`.
6. When your file browser pops up to load the extension, find the `manifest.json` file from this repo and click on it.
7. Go to the New York Times' [Wordle site](https://www.nytimes.com/games/wordle/index.html)
8. Enjoy! Unless it doesn't work, in which case 🤷...
