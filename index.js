
var express = require('express');
var logger = require('morgan');
var bodyParser =  require('body-parser');
app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

require('./routes/contacts.js')(app);

app.get('/', function(request, response) {
    response.end();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.setHeader('content-type', 'application/json');
        var msg = err.message;
        if(err.status==400){
             msg = '{\"error\": \"Could not decode request: JSON parsing failed\"}';
        }
        return res.end(msg);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.setHeader('content-type', 'application/json');
    var msg = err.message;
    if(err.status==400){
        msg = '{\"error\": \"Could not decode request: JSON parsing failed\"}';
    }
    return res.end(msg);
});


app.listen(app.get('port'), function(){
    console.log("listening at port "+app.get('port'));
});
