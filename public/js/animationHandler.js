import { frameCounts, frameDelay, startAnimation } from './animationUtils.js';

document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('text');
    const imgElement = document.getElementById('voidDemon');

    inputElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const word = inputElement.textContent;
            checkWord(word);
        }
    });

    function checkWord(word) {
        fetch('/check-word', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ word: word })
        })
            .then(response => response.json())
            .then(data => {
                if (data.result === 'kind') {
                    startAnimation('kind', imgElement);
                } else {
                    startAnimation('angry', imgElement);
                }
            });
    }
});
