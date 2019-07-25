const path=require('path');
const express=require('express');
const hbs=require('hbs');
const bodyParser=require('body-parser');
const flash = require('express-flash-notification');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const fileUpload = require('express-fileupload');

hbs.registerHelper('subString', function(string){
    let result=string;
    if(result.length>128) result=result.substring(0, 128)+"..."
    return result;
});

const app=express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3000 }
}));

const routes=require('./routes/index');
routes(app);

app.listen(8000, ()=>{
    console.log('running on http://localhost:8000 ...');
});