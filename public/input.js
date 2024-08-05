
document.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.getElementById('text');
    //const cursorElement = document.getElementById('cursor');
    let text = '';
    const maxLength = 15; // Максимальная длина текста

    function handleKeyPress(event) {
        const keyPressed = event.key;

        // Проверка, была ли нажата клавиша Backspace
        if (keyPressed === 'Backspace') {
            // Удаление последнего символа, если он есть
            text = text.slice(0, -1);
        } else if (keyPressed.length === 1 && keyPressed.match(/[a-zA-Z0-9]/)) {
            // Проверка, что нажатый ключ — это один символ и он является буквой или цифрой
            if (text.length < maxLength) {
                text += keyPressed;
            }
        }

        // Обновление содержимого элемента output
        textElement.textContent = text;
    }

    // Обработчик события keydown на весь документ
    document.addEventListener('keydown', handleKeyPress);
});
