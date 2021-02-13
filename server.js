import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js'
// App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:xRL6vlIM8jpjWvK5@cluster0.ywwv8.mongodb.net/tinderdb?retryWrites=true&w=majority'
// Middlewares

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello World!!!'));

app.post('/tinder/card', (req, res) => {

});

// Listener
app.listen(port, () => console.log('Listening on localhost: ' + port))