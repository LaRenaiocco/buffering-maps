const express = require('express');
const chalk  = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index')
});

app.listen(port, () => {
    debug(`listening on port ${chalk.green('port')}`)
});

