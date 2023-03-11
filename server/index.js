import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';


// For testing my API I saving one response in a .js file 
//import fakedata  from './fakedata.js';

const app = express();
const PORT = 5000;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
    res.json("Hello Techtonica Server for a Game");
  });

// Make the GET request for the GAME Api for grabbing all the questions 
// app.get("/questions", (req, res) => {
//   res.json(fakedata);
// })

  // //hardcode the game response for testing reasons to don't saturate my API call. 
app.get('/api/game', (req, res) =>{
  fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
  .then((response) => response.json())
  // the below line of code doesn't in this case actually need the curly brackets and return statement here because there's only one thing happening
  //but I'm leaving it in to remember the Lesson with Natalia about how I could make more than one thing happen in this .then statment
  .then((triviaData) => {
    //reverse alphabetize answers so true always comes before false
    //transform each result in a certain way - modify triviaData.results to include another property called answers which makes one array of strings holding all the answers

    
    //triviaData before:    

    //"correct_answer": "True",
    // "incorrect_answers": [
    //   "False"
    //   ]

    //triviaData after:
    
    //"correct_answer": "True",
    // "incorrect_answers": [
    //   "False"
    //   ]
    //"answers": ["True", "False"]
    
    return res.json(triviaData)
  });  
  
})



app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));