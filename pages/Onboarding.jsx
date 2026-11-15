function Onboarding(){
  let [slide, setSlide] = useState(0);
  if (localStorage.getItem("nullpoint-tutorialCompleted") === true){
    return <center>
      <button onClick={() => setPage(<CourseSelection />)}>Click here to continue</button>
      <button onClick={() => {
        localStorage.setItem("nullpoint-tutorialCompleted", false);
        localStorage.setItem("nullpoint-pts", 0);
        localStorage.setItem("nullpoint-streak", 0);
      }}>Reset data</button>
    </center>
  }
  if (slide === 0){
    return <center>
      <img src="./media/SCR-20261114-ouua.png" style={{width: "200px", height: "200px"}} />
      <p>Hello, and welcome to Nullpoint. I'm Mr. Purple Cube Guy, and I'm here to teach you how to stay safe online.</p>
      <button onClick={() => setSlide(c => c + 1)}>Next</button>
    </center>
  } else if (slide === 1){
    return <center>
      <img src="./media/SCR-20261114-ouua.png" style={{width: "200px", height: "200px"}} />
      <br />
      <div style={{display:"flex", textAlign: "center", alignSelf: "center"}}>
        <img src="./media/SCR-20261114-outh.png" style={{width: "100px", "height": "100px"}} />
        <img src="./media/SCR-20261114-ousm.png" style={{width: "100px", "height": "100px"}} />
        <img src="./media/pngtree-potato-picture-clip-art-transparent-png-image_20422575-2005896708.png" style={{width: "100px", height: "100px"}} />
      </div>
      <br />
      <p>These are my teaching assistants. You'll see them help you too.</p>
      <button onClick={() => setSlide(c => c + 1)}>Next</button>
    </center>
  } else if (slide === 2){
    return <center>
      <img src="./media/SCR-20261114-ouua.png" style={{width: "200px", height: "200px"}} />
      <p>Nullpoint has many courses. Each course has modules and lessons.</p>
      <button onClick={() => setSlide(c => c + 1)}>Next</button>
    </center>
  } else if (slide === 3){
    return <center>
      <img src="./media/SCR-20261114-ouua.png" style={{width: "200px", height: "200px"}} />
      <p>In a lesson, you have hearts. You use one every time you get a question wrong. If you run out of hearts, you need to start over!</p>
      <button onClick={() => setSlide(c => c + 1)}>Next</button>
    </center>
  } else if (slide === 4){
    return <center>
      <img src="./media/SCR-20261114-ouua.png" style={{width: "200px", height: "200px"}} />
      <p>That's all, enjoy Nullpoint!</p>
      <button onClick={() => {localStorage.setItem("nullpoint-tutorialCompleted", true); setPage(<CourseSelection />)}}>Next</button>
    </center>
  }
}
