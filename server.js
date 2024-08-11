const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

const wordList = ['soymilk', 'a', 'word3'];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/check-word', (req, res) => {
    const word = req.body.word;
    if (wordList.includes(word)) {
        res.json({ result: 'kind' });
    } else {
        res.json({ result: 'angry' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});