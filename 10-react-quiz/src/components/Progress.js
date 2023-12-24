function Progress({ index, numQuesitons, points, totalPoints, answer }) {
  // On progressbar it doesn't move after i click the answer. To fix that i use
  // a trick on value situation
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
