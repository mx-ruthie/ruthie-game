const Score = (props) => {
   if(props.score >= 7) {
    return(
     <div>Congrats! You won! Your score is {props.score} out of 10.</div>
    )}
    else {
        return (<div>Your score is {props.score} out of 10. You needed a score of at least 7/10 to win the game. You lose. Try again.  </div>)
    }
}

export default Score;