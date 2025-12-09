const express = require('express');
const app = express();
const path = require('path');

//Serve all static files from the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

//Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
