let timerInterval;


function startTimer() {
    let timerElement = document.getElementById("focus-timer");
    let totalTime = 25 * 60;
    let timerSound = document.getElementById("timer-sound");
    timerSound.volume = 0.2;
    let clickOnSound = document.getElementById("click-on-timer-sound");
    clickOnSound.play();

    
    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;

        let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

        timerElement.textContent = `${displayMinutes}:${displaySeconds}`;

        if (totalTime <= 0) {
            clearInterval(timerInterval);
            timerSound.play();


            setTimeout(function() {
                startSecondTimer();
            }, 4000);
        } else {
            totalTime--;
        }
    }, 1000);
}


function startSecondTimer() {
    let timerElement = document.getElementById("focus-timer");
    let totalTime = 5 * 60;
    let timerSound = document.getElementById("pause-end-sound");
    timerSound.volume = 0.2;

    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;

        let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

        timerElement.textContent = `${displayMinutes}:${displaySeconds}`;

        if (totalTime <= 0) {
            clearInterval(timerInterval);
            timerSound.play();
        } else {
            totalTime--;
        }
    }, 1000);
}