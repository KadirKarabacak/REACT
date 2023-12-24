import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
  // Questions array which comes from FAKE API
  questions: [],

  // "loading", "error", "ready", "active", "finished"
  status: "loading",

  // To show questions one by one
  index: 0,

  // Users points
  points: 0,
};

// Updating multiple states at one time when the dataRecieved.
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
      return { ...state, status: "active" };
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
    default:
      throw new Error("Action is unknown!");
  }
}

export default function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

  useEffect(function () {
    fetch(`http://localhost:9000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
        )}
      </Main>
    </div>
  );
}
