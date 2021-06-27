var express =  require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const https = require("https");
const http = require('http')
const Config = require('./config');
const mongoose = require('mongoose');
const fs = require("fs");
var swaggerUi = require('swagger-ui-express');
var swaggerJSDoc = require('swagger-jsdoc');
var options = require('./swagger/swagger');
var winston = require('winston');
var Service = require('./services');
var Routes = require('./routes');


const app = express();

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(options);
  });



app.use(cors());
//app.use(bodyParser.json({limit: '50mb', extended: true}));
//app.use(bodyParser.urlencoded({ limit: "50mb",extended: false}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log` 
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
 
//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// 
if (process.env.NODE_ENV !== 'live') {
  logger.add(new winston.transports.Console({
    format: winston.format.json()
  }));
}


//app.use('/uploads', express.static(__dirname+'/uploads'));

app.use('/', (req, res, next) => {
  //console.log(req.files);
  //logger.info(req.body);
  next();
})

// Set our api routes
app.use('/user', Routes.UserRoutes);


app.use((err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
    console.log(err.error);
    // if you want to pass whole error then pass detail object
    let msg = err.error.details[0].message.replace(/['"]+/g, '');
    return Service.GlobalService.sendError(res, msg);
  } else {
    // pass on to another error handler
    next(err);
  }
});

mongoose.connect(Config.dbConfig.config.dbURI, { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

server = http.createServer(app);

console.log(process.env.NODE_ENV, Config.dbConfig.config.PORT);
server.listen(Config.dbConfig.config.PORT);