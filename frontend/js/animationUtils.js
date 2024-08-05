export const frameCounts = { kind: 9, angry: 10, eat: 5 }; // Количество кадров для каждой анимации
export const frameDelay = 100; // Задержка между кадрами в миллисекундах
let currentFrame = 0;
let animationInterval;

export function updateFrame(animationType, imgElement) {
    const frameCount = frameCounts[animationType];
    let framePath = `assets/maw_${animationType}_${currentFrame}.png`;
    imgElement.src = framePath;
    currentFrame++;

    if (currentFrame >= frameCount) {
        clearInterval(animationInterval);
        framePath = `assets/maw_idle.png`; // Возвращение к исходному кадру
        imgElement.src = framePath;
        currentFrame = 0;
    }
}

export function startAnimation(animationType, imgElement) {
    currentFrame = 0; // сброс текущего кадра
    clearInterval(animationInterval); // Остановка предыдущей анимации, если она была запущена
    animationInterval = setInterval(() => updateFrame(animationType, imgElement), frameDelay);
}
