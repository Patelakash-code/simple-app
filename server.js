const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const users = [];

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    users.push({ name, email });
    res.json({ message: 'Form submitted successfully!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
