const express = require('express');
const app = express();
const path = require('path');

//Serve index.html from root directory
app.use(express.static(path.join(__dirname, '..')));

//Serve other html files
app.use(express.static(path.join(__dirname, '..', 'html')));

//Serve CSS from /css
app.use('/css', express.static(path.join(__dirname, '..', 'css')));

//Home route (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'))
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
