const express = require('express');
const app = express();
const port = 3000;

// Обработка запросов к корневому маршруту
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

// Статические файлы
app.use(express.static('public'));

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
