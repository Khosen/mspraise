var express = require('express'),
app = express(),
 server = require('http').createServer(app);  
 //io = require('socket.io')(server);

port = process.env.PORT || 4000;
var bodyParser = require ('body-parser');
var path = require('path');

//var config = require('./config')();
var mongoose = require('mongoose');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
 //nodemailer = require('nodemailer');
//var configdb= require('./config/database');
//var  Comments= require('./model/comments');

/*mongoose.Promise = global.Promise;

//mongoose.Promise = Promise;
//configuration===========================
 mongoose.connect(configdb.database, {
 keepAlive: true,
 reconnectTries: Number.MAX_VALUE

//useMongoClient: true

 });

//mongoose.connect(config.database, { useMongoClient: true});
let db = mongoose.connection;

//check connection
db.once('open', function(){
  console.log('connected to MongoDB....');
});

//check for errors
db.on('error', function(err){
  console.log(err +'could not connect');
});*/



//set template engine
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//require('./config/passport') (passport);



//define static path to use css files etc
app.use(logger('dev'));
//body parser and cookie parser middleware
app.use(bodyParser.urlencoded({extended: false}));
//parse application json
app.use(bodyParser.json());
//app.use(express.bodyParser({uploadDir:'./uploads'}));

app.use(cookieParser('secret'));

//define static folders u will use
app.use(express.static(path.join(__dirname, 'node_modules')));
//app.use(express.static(path.join(__dirname +'/node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(__dirname));

app.use(session({ 
  secret: 'secret',
  resave: true,
  saveUninitialized: true,

    //cookie: { secure:true  }
}));
 //express messages middleware
/* app.use(require('connect-flash')());
 app.use(function (req, res, next){
   res.locals.messages = require('express-messages')(req, res);
   next();
 });
app.use(flash());*/

 

  //express validator middleware
  /*app.use(expressValidator({
    errorFormatter: function (param, msg, value){
      var namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;

      while(namespace.length){
        formParam  += '['+ namespace.shift() + ']';
      }
      return{
        param: formParam,
        msg: msg,
        value: value
      };
    }
  }));*/

/*//passport config
require('./config/passport')(passport);
//passport middleware
app.use(passport.initialize());
app.use(passport.session());*/


/*app.get('*', function(req, res, next){
  res.locals.user = req.user||null;
 // console.log(req.user);
  next();

});*/


//call all the routes
let  routes= require('./routes/index');
let pages = require('./routes/pages');

//let imgupload = require('./routes/upload');
app.use('/', routes);
app.use('/pages', pages);


/*io.on('connection', function(client) {  
  
    console.log('Client connected...');
    db.collection('topartistes').find({},
       function(err, docs) {
        if(err) throw err;
      
       });*/

       
/*io.on('connection',function(socket){
  socket.on('comment',function(data){
      var commentData = new Comments(data);
      commentData.save();
      socket.broadcast.emit('comment',data);  
  });

});*/
server.listen(port, function(req, res) {
    //console.log('todo list RESTful API server started on: ' + port);
   // console.log(new Date(Date.now()).toISOString());
   console.log("ok");
    
});

