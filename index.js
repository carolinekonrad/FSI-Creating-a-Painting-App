
let selectedColor = 'blue'
const painting = document.querySelector('.painting')
const palette = document.querySelector('.palette')
let redButton = document.querySelector('#red')
let yellowButton = document.querySelector('#yellow')
let greenButton = document.querySelector('#green')
let blueButton = document.querySelector('#blue')
let purpleButton = document.querySelector('#purple')


painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})

palette.addEventListener('click', function(e){
    selectedColor = e.target.id
})

// redButton.addEventListener('click', function(){
//     selectedColor = "red"
// })

// yellowButton.addEventListener('click', function(){
//     selectedColor = "yellow"
// })

// greenButton.addEventListener('click', function(){
//     selectedColor = "green"
// })

// blueButton.addEventListener('click', function(){
//     selectedColor = "blue"
// })

// purpleButton.addEventListener('click', function(){
//     selectedColor = "purple"
// })
