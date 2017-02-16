var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/app'));
//BodyParser
app.use(bodyparser());


app.get('/', function(req, res) {
    res.render('index');
});


//app port
app.set('port', (process.env.PORT || 9000));

//app listen
app.listen(app.get('port'), function() {
    console.log('Our app is running on http://localhost:' + app.get('port'));
});
