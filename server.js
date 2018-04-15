const express = require('express');
const app = express();

const path = require('path');

// Port:
const port = process.env.PORT || 3000;

// Static files:
app.use(express.static('dist'));

// TODO: more routes IF NECESSARY
app.get('/', (req,res,next) => {
 res.sendFile('index.html', { root: path.join(__dirname, './dist') })
});

// 404!
app.get('*', (req,res,next) => {
 res.redirect('/');
});

app.listen(port, () => {
 console.log(`Currently listening to port ${port}.`);
})
