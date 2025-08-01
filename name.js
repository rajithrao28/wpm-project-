const express = require('express');
const path = require('path');
const indexRouter = require('./app_server/routes/index');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

