//CONSTANTS
const CANVAS_BACKGROUND_COLOUR = 'lightblue'
const CANVAS_BORDER_COLOUR = 'darkblue'

var gameCanvas = document.getElementById("gameCanvas")

//Returns two dimensional drawing context
var ctx = gameCanvas.getContext("2d")

//setting up background
ctx.fillStyle = CANVAS_BACKGROUND_COLOUR
ctx.strokeStyle = CANVAS_BORDER_COLOUR
ctx.fillRect(0,0,gameCanvas.width, gameCanvas.height)
ctx.strokeRect(0,0,gameCanvas.width, gameCanvas.height)