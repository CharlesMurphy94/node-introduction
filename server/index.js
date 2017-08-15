const   express = require('express'),
        bodyParser = require('body-parser')
        app = express(),
        bc = require('./controllers/books_controller');
 
        
//.. MIDDLEWARE ..//
app.use(bodyParser.json());
app.use(express.static('./../public/build'));


//.. END POINTS ..//
app.post('/api/books', bc.create);
app.get('/api/books', bc.read);
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.delete);

app.listen(3000,()=>{
    console.log(`server listening on port 3000`);
});




