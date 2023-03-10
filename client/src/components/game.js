import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";
import Score from "./score";

const Game = (props) => {

    const [questions, setQuestions] = useState([]);
    const [scoreCount, setScoreCount] = useState(0);

    const loadData = () => {
        fetch('http://localhost:5000/api/game')
            .then((response) => response.json())
            .then(data => {
                console.log("This is line 11", data.results);
                setQuestions(data.results);
            })
    }
console.log(scoreCount);
    useEffect(() => {
        loadData();
    }, [])

    return (
        <>
        <Score score={scoreCount}/>
        <div className="Container">
            <div className='question-count'>
                <h2>Questions</h2>
            </div>
            {questions.map((question, index) => {
                return <QuestionCard key={index} question={question} score={scoreCount} scoreCount={setScoreCount} />
            })}
        </div>
        </>
    )

}

export default Game;
