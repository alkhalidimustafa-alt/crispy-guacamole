const startBtn = document.getElementById('startBtn');
const questions = document.getElementById('questions');

startBtn.addEventListener('click', () => {
    startBtn.classList.add('hidden');
    questions.classList.remove('hidden');
});
