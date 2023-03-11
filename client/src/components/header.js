const Header = (props) => {

  let message;
  if (props.user) {
    message = `Are you ready to play, ${props.user}?`;
  } else {
    message = `Welcome to Ruthie's Mediocre Trivia Game!`;
  }
  
  return (
    <div className={"textHeader"}>
      <h3>{message}</h3>
    </div>
  );
};

export default Header;