const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для обработки статических файлов
app.use(express.static(path.join(__dirname, 'public')));


function wordCheck(req, res) {

}

// Маршрутор API
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from server!' });
});


// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});