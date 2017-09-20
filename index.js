

const express = require('express');
const bodyParser = require('body-parser');

const port = 3001;

const app = express();
const messages = [];

// const messages = [
//     {
//         message:'Hello',
      
//     },
//     {
//         message:'How are you?',
       
//     },
//     {
//         message:'How is the weather?',
       
//     }

// ];


app.use(express.static('assets'));
app.use(bodyParser.json());

app.get('/messages', function (req, res, next) {
    res.status(200).json({ messages: messages });
  });

app.post('/messages', function (req, res, next) {
    messages.push({ message: req.body.message, time: new Date() });
    res.status(200).json({ messages: messages });
    console.log(req.body);
  });  


app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});