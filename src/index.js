const express = require('express');
const morgan = require('morgan');
var exphbs  = require('express-handlebars');
var path = require('path');

const app = express();
const port = 3000;

// su ly static file biee file public thanh static
app.use(express.static(path.join(__dirname,'public')));
//http logger
app.use(morgan('combined'));
//template engine(Công cụ mẫu)
app.engine('.hbs',exphbs({extname:'.hbs'}));
//đặt cho cái express sử dụng engine
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));//đối số tới thư mục views

// console.log("đường dẫn",path.join(__dirname, 'resources/views'));

app.get('/', function (req, res) {
  res.render('home');
});
app.get('/news', function (req, res) {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})