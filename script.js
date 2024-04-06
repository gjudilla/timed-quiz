document.addEventListener('DOMContentLoaded' () => {
    const timeClock = document.getElementById
    let score = 0;
    let timeRemaining = 90; //time left in seconds

    const questions = [
        {question: "", answer: [""]}, 
        {question: "", answer: [""]}, 
        {question: "", answer: [""]}, 
        {question: "", answer: [""]}, 
        {question: "", answer: [""]}, 
        {question: "", answer: [""]}, 
        {question: "", answer: [""]}, 
        {question: "", answer: [""]}, 
    ]; 

    startButton.addEventListener("click", playGame);
    
    function playGame() {
        score = 0;
        timeRemaining = 90;
        startTimer();  
    }

    let timer; 

    function startTimer() {
        timer = setInterval(() => {
            // timeRemaining
            timeClock.textContent = timeRemaining;
            if (timeRemaining <= 0) {
                clearInterval(timer);
                endGame();
            }
        }, 1000);
    }

    function 
})
