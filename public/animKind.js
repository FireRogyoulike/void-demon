const frameCounts = { kind: 9, angry: 10, eat: 5 }; // Количество кадров для каждой анимации
const frameDelay = 100; // Задержка между кадрами в миллисекундах
let currentFrame = 0;
const imgElement = document.getElementById('voidDemon');
let animationInterval;

function updateFrame(animationType) {
    const frameCount = frameCounts[animationType];
    let framePath = `assets/${animationType}/maw_${animationType}_${currentFrame}.png`;
    imgElement.src = framePath;
    currentFrame++;

    if (currentFrame >= frameCount) {
        clearInterval(animationInterval);
        framePath = `assets/maw_idle.png`; // Возвращение к исходному кадру
        imgElement.src = framePath;
        currentFrame = 0;
    }
}

function startAnimation(animationType) {
    currentFrame = 0; // сброс текущего кадр
    clearInterval(animationInterval); // Остановка предыдущуей анимации, если она была запущена
    animationInterval = setInterval(() => updateFrame(animationType), frameDelay);
}








// Функция для отправки запроса к серверу
function fetchData() {
    fetch('/api')  // Запрос к Express серверу
        .then(response => response.json())
        .then(data => {
            console.log('Ответ от сервера:', data);
            playAnimation();  // Запустить анимацию при получении ответа
        })
        .catch(error => console.error('Ошибка:', error));
}

// Пример вызова функции для получения данных
fetchData();