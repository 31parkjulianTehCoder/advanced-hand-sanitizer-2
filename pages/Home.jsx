function Home(){
  return <center>
    <h1>Welcome to Nullpoint</h1>
    <p>Learn about data privacy, how to protect yourself in the modern internet, and more.</p>
    <button onClick={() => {window.setPage(<Onboarding />)}}>Course Selection</button>
  </center>
}
