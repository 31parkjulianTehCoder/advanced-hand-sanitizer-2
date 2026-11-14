function LessonDisplay({ lesson }) {
  let [index, setIndex] = useState(0);
  let [hearts, setHearts] = useState(3);
  if (lesson[index].type === "multiple-choice") {
    return (
      <>
        <h2>{lesson[index].question}</h2>
        {hearts}
        <ol>
          {lesson[index].choices.map((n) => (
            <li>
              <button
                onClick={() => {
                  if (n === lesson[index].choices[lesson[index].correct]) {
                    setIndex((c) => c + 1);
                  } else {
                    setHearts(c => c - 1);
                  }
                }}
              >
                {n}
              </button>
            </li>
          ))}
        </ol>
      </>
    );
  }
}
