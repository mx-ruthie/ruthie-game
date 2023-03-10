import {decode} from "html-entities";

const QuestionCard = (props) => {
  //creates basic array of all 4 answer choices for use in the map
  let answers = [props.question.correct_answer, ...props.question.incorrect_answers];
  console.log(answers)
//many thanks to Camille for sharing code with me so I could wrap my brain around how to map these multiple choice answers
  return (
    <div className={"question-section"}>
      <div className="question-text">{decode(props.question.question)}</div>
      <div className="answer-section">{answers.map((answer, index) => {
        return <button key={index} name="answerChoices"></button>
      })}
      </div>
    </div>
  );
};

export default QuestionCard;
