const path = require ('path');
const  express  = require('express');
const { engine } = require ('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 8080;
const db = require('./config/db');
const route = require ('./routes');
db.connect();

app.use(express.static(path.join(__dirname,'public')));

app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views/')); 

app.use(morgan('combined'))

app.get('/',(req,res) => {
  res.render('home');
})

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})