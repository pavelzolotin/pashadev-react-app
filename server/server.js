const express = require('express');

const app = express();
const port = 3000;
const appPath = 'build';

app.use(express.static(appPath));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: appPath});
});

app.listen(port);