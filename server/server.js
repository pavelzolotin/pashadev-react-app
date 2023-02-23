const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const appPath = 'build';

app.use(express.static(appPath));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: appPath});
});

app.listen(port, () => {
    console.log(`Express is running on port ${port}`);
});