function App(){
  let [page, setPage] = useState(<Home />);
  window.setPage = function(n){
    setPage(n);
  }
  return <>
    <div className="center">
      <h3>Nullpoint{"  "}</h3>
      <p>{"  "}{window.rewards} points</p>
    </div>
    {page}
  </>;
}
