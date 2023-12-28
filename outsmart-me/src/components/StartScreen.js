function StartScreen({ numOfQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Try and OutSmart me.</h2>
      <h3> That is if you can 🤭...</h3>
      <h4>{numOfQuestions} question to test your React mastery</h4>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
