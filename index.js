var express = require('express');


// Init the app and express with some setup
var app = express();

// Call config so we can access the env va
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use( express.static( "public" ) );


app.get( (req, res) => {
    res.render("index");
});

app.get("/coolstuff", (req, res) => {
    res.render("coolstuff");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });