const p1btn = document.querySelector('#p1Btn')
const p2btn = document.querySelector('#p2Btn')
const resetbtn = document.querySelector('#reset')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const winNum = document.querySelector('#winNum')

let p1Score = 0
let p2Score = 0
// let winningScore = 5
let isGameOver = false;

p1btn.addEventListener('click', function(e){
    if (!isGameOver) {
        p1Score += 1
        if (p1Score === winningScore) {
            isGameOver = true
            p1Display.classList.add('winner')
            p2Display.classList.add('loser')
            p1btn.disabled = true
            p2btn.disabled = true
        }
        p1Display.innerText = p1Score
    }   
    
})
p2btn.addEventListener('click', function(e){
    if (!isGameOver) {
        p2Score += 1
        if (p2Score === winningScore) {
            isGameOver = true
            p2Display.classList.add('winner')
            p1Display.classList.add('loser')
            p1btn.disabled = true
            p2btn.disabled = true
        }
        p2Display.innerText = p2Score
    }   
    
})

resetbtn.addEventListener('click', reset)

// winNum.addEventListener('change', reset)
winNum.addEventListener('change', function(){
    winningScore = parseInt(winNum.value)
    reset() 
})

function reset () {
    isGameOver = false
    p1Score = 0
    p2Score = 0
    p1Display.innerText = 0
    p2Display.innerText = 0
    p2Display.classList.remove('winner', 'loser')
    p1Display.classList.remove('loser', 'winner')
    p1btn.disabled = false
    p2btn.disabled = false

}