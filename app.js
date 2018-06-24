const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      path = require('path');

const PORT = process.env.PORT || 3000;  

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.use('/img',express.static(path.join(__dirname, 'public/img')));
app.use('/js',express.static(path.join(__dirname, 'public/js')));
app.use('/css',express.static(path.join(__dirname, 'public/css')));

// app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/views/index.html');
    // res.render('')
})


app.listen(PORT, function() {
    console.log('Server is listening on port: ' + PORT);
})
