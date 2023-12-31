import { useQuiz } from "../context/QuizContext";

function Progress() {
  // On progressbar it doesn't move after i click the answer. To fix that i use
  // a trick on value situation
  const { index, questions, points, totalPoints, answer } = useQuiz();

  const numQuesitons = questions.length;

  return (
    <header className="progress">
      <progress max={numQuesitons} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuesitons}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}

export default Progress;
