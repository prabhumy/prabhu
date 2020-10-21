const express = require('express');
const { listenerCount, report } = require('process');
const app = express();

app.get('/', function(req, res) {
    // console.log('Hellow World');
    res.send('Hellow World');
})

app.get('/alien', function(req, res) {
    const id = req.query.id;
     
    res.send('Hellow Alien' + id);
})

app.get('/alien/20', function(req, res) {
     
    res.send('Hellow Prabhu');
})
app.get('/alien/:id', function(req, res) {
     const id = req.params.id;

    res.send('Hellow Prabhu' + id);
})


app.listen(9000, function(req, res){
    console.log('Server Running');
});