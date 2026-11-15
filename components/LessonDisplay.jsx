function LessonDisplay({ lesson }) {
  let [index, setIndex] = useState(0);
  let [hearts, setHearts] = useState(3);
  let sources = [
    "./media/SCR-20261114-ousm.png",
    "./media/SCR-20261114-outh.png",
    "./media/SCR-20261114-ouua.png",
    "./media/pngtree-potato-picture-clip-art-transparent-png-image_20422575-2005896708.png"
  ]
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
        <div>
          <img src = {sources[Math.floor(Math.random() * sources.length)]} style={{width:"200px", height:"200px"}}/>
          <h2>{lesson[index].question}</h2>
        </div>
        {hearts} Hearts
        <br/>
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
  } else {
    localStorage.setItem("nullpoint-pts", ((Number(localStorage.getItem("nullpoint-pts")) || 0) + 200));
    localStorage.setItem("nullpoint-streak", 1)
    return <center>
      <h1>Lesson complete!</h1>
      <p>+200 points</p>
      <p>Streak extended!</p>
    </center>
  }
}
