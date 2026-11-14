function LessonDisplay({ lesson }) {
  let [index, setIndex] = useState(0);
  if (lesson[index].type === "multiple-choice") {
    return (
      <>
        <h2>{lesson[index].question}</h2>
        <ol>
          {lesson[index].choices.map((n) => (
            <li>
              <button
                onClick={() => {
                  if (n === lesson[index].choices[lesson[index].correct]) {
                    setIndex((c) => c + 1);
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
