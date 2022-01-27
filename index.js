
let selectedColor = 'blue'
const painting = document.querySelector('.painting')
let redButton = document.querySelector('#red')
let yellowButton = document.querySelector('#yellow')
let greenButton = document.querySelector('#green')
let blueButton = document.querySelector('#blue')
let purpleButton = document.querySelector('#purple')
let clearButton = document.querySelector('#clear')

painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})

redButton.addEventListener('click', function(){
    selectedColor = "red"
})

yellowButton.addEventListener('click', function(){
    selectedColor = "yellow"
})

greenButton.addEventListener('click', function(){
    selectedColor = "green"
})

blueButton.addEventListener('click', function(){
    selectedColor = "blue"
})

purpleButton.addEventListener('click', function(){
    selectedColor = "purple"
})

clearButton.addEventListener('click', function(){
    painting.style.backgroundColor = 'white'
})