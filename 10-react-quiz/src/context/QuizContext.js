import { createContext, useContext, useEffect, useReducer } from "react";

const SECS_PER_QUESTION = 30;

const initialState = {
  // Questions array which comes from FAKE API
  questions: [],

  // "loading", "error", "ready", "active", "finished"
  status: "loading",

  // To show questions one by one
  index: 0,

  // Answer
  answer: null,

  // Users points
  points: 0,

  // HighScore
  highscore: 0,

  // Timer
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    // ✅ Data fetched
    case "dataRecieved":
      return { ...state, questions: action.payload, status: "ready" };
    // ❌ Data rejected
    case "dataFailed":
      return { ...state, status: "error" };
    // 🏁 Start Clicked
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    // ☝ Answer Clicked
    case "newAnswer":
      // For points learn which question is it.
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        /**
         * Firstly learn which question is it ?
         * Then compare action.payload with question's correctOption
         * If true state.points + question's own points
         * If not, leave as it same
         */
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case "restart":
      return {
        ...state,
        index: 0,
        answer: null,
        points: 0,
        status: "ready",
        secondsRemaining: 10,
        questions: state.questions.slice().sort((a, b) => Math.random() - 0.5),
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action is unknown!");
  }
}

const QuizContext = createContext();

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const totalPoints = questions.reduce(function (acc, question) {
    return acc + question.points;
  }, 0);

  useEffect(function () {
    fetch(`https://codingheroes.io/api-react-course-projects/questions.json`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        numQuestions,
        questions,
        totalPoints,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext used outside of the QuizProvider");
  return context;
}

export { useQuiz, QuizProvider };
