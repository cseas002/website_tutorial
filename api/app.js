const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello, this is your API!');
});

app.get('/api', (req, res) => {
    res.json({ "users": ["user1", "user2"] })
})

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
