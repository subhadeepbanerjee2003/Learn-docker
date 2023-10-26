/*console.log('Hey there! I am JS file from docker 🐳');*/

const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    return res.send({ message: 'Hello world from docker server 🐳' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});