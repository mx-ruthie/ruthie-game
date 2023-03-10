const Score = (props) => {
   if(props.score >= 7) {
    return(
     <div>Congrats! You won! Your score out of 10 is {props.score}.</div>
    )}
    else {
        return (<div>You lose. Try again. Your score out of 10 is {props.score}</div>)
    }
}

export default Score;