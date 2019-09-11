var gameMangameager
function setup() {
    createCanvas(windowWidth, windowHeight)
}

function preload() {
    game = new Game()
}

function draw() {
    game.handleCicle()
}

function touchStarted() {
}