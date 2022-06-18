const homeScore = document.getElementById('home-score');
const guestScore = document.getElementById('guest-score');
let homeScoreCounter = 0;
let guestScoreCounter = 0;


const homeControls = document.getElementById('home-controls');
const guestControls = document.getElementById('guest-controls')

const controlBtns = document.querySelectorAll('.score-btn');
controlBtns.forEach(button => {
    button.addEventListener('click', handleClick)
})

function handleClick(event) {
    let eventBtn = event.target;
    let eventBtnValue = event.target.value;
    let eventParent = eventBtn.parentElement;
    if(eventParent === homeControls) {
        if(eventBtnValue === "1") {
            homeScoreCounter += 1;
            homeScore.textContent = homeScoreCounter
        } else if(eventBtnValue === "2") {
            homeScoreCounter += 2;
            homeScore.textContent = homeScoreCounter
        } else {
            homeScoreCounter += 3;
            homeScore.textContent = homeScoreCounter
        }
    } else {
        if(eventBtnValue === "1") {
            guestScoreCounter += 1;
            guestScore.textContent = guestScoreCounter
        } else if(eventBtnValue === "2") {
            guestScoreCounter += 2;
            guestScore.textContent = guestScoreCounter
        } else {
            guestScoreCounter += 3;
            guestScore.textContent = guestScoreCounter
        }
    }
}