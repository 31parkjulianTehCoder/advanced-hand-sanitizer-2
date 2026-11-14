function LessonDisplay({ lesson }) {
  let [index, setIndex] = useState(0);
  let [hearts, setHearts] = useState(3);
  if (hearts <= 0){
    
    return <center>
      <h2>You ran out of hearts!</h2>
      <button onClick={() => {setIndex(0);setHearts(3);}}>start over</button>
    </center>
  }
  console.log(lesson.length);
  console.log(index);
  if (lesson[index].type === "multiple-choice") {
    return (
      <center>
        <h2>{lesson[index].question}</h2>
        {hearts} Hearts
          {lesson[index].choices.map((n) => (
              <><button
                onClick={() => {
                  if (n === lesson[index].choices[lesson[index].correct]) {
                    setIndex((c) => c + 1);
                  } else {
                    setHearts(c => c - 1);
                  }
                }}
              >
                {n}
              </button><br/></>
          ))}
      </center>
    );
  } else if (lesson[index].type === undefined){
    window.rewards = (window.rewards || 0) + 200
    return <center>
    <h1>Lesson complete!</h1>
    </center>
  }
}
