const main = document.querySelector('main');
const ratingStart = document.querySelector('#start'); 
const ratingEnd = document.querySelector('#end');
ratingEnd.remove();

score = 0;

const ratingOptions = document.querySelector('.ration__options');
ratingOptions.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        score = e.target.getAttribute('data-score');
    }
})

const submitBtn = document.querySelector('.rating__submit');
submitBtn.addEventListener('click', () => {
    ratingStart.remove();
    main.appendChild(ratingEnd);
    const scoreSelection = document.querySelector('#score-selection');
    scoreSelection.textContent = score;
})








