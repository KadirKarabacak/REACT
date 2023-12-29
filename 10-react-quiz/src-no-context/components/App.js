import { useEffect, useReducer } from "react";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";

// https://drive.filen.io/d/17bfae47-c2bb-41bf-a7a4-195f6a6bafa1#OZhR3Of32wJH0mmebWWA7PjVv7UEb19I

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

export default function App() {
  // Destructured things = STATE
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
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuesitons={numQuestions}
              points={points}
              totalPoints={totalPoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            totalPoints={totalPoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
