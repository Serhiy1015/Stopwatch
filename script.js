let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let miliseconds = document.getElementById('miliseconds')
let start = document.getElementById('start')
let reset = document.getElementById('reset')
let interval

function addNull(num) {
    return num > 9 ? num : '0' + num
}

start.addEventListener('click', function () {
    if (start.value === 'START' || start.value === 'CONTINUE') {
        let currentMilliseconds = parseInt(miliseconds.textContent)
        let currentSeconds = parseInt(seconds.textContent)
        let currentMinutes = parseInt(minutes.textContent)
        interval = setInterval(function () {
            currentMilliseconds++
            miliseconds.textContent = addNull(currentMilliseconds % 10)
            if (currentMilliseconds >= 10) {
                currentMilliseconds = 0
                currentSeconds++
                seconds.textContent = (addNull(currentSeconds % 60))
            }
            if (currentSeconds >= 60) {
                currentSeconds = 0
                currentMinutes++
                minutes.textContent = addNull(currentMinutes % 60)
            }
        }, 100)
        start.value = 'STOP'
    }
    else if (start.value === 'STOP') {
        clearInterval(interval)
        start.value = 'CONTINUE'
    }
}
)
reset.addEventListener('click', function () {
    clearInterval(interval)
    seconds.textContent = '00'
    miliseconds.textContent = '00'
    minutes.textContent = '00'
    start.value = 'START'
})


let openTimerButton = document.querySelector('.open-timer')
let modalTimer = document.querySelector('.modal-timer')
openTimerButton.addEventListener('click', function () {
    modalTimer.classList.toggle('active-timer')
    if (modalTimer.style.display = 'flex') openTimerButton.value = 'CLOSE TIMER'
})













