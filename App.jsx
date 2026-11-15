function App(){
  let [page, setPage] = useState(<Home />);
  window.setPage = function(n){
    setPage(n);
  }
  return <>
    <div className="center">
      <h3>Nullpoint{"  "}</h3>
      <p>{"  "}{{localStorage.getItem("nullpoint-pts") || 0}} points</p>
      <p>{"  "}{{localStorage.getItem("nullpoint-streak") || 0}} day streak</p>
    </div>
    {page}
  </>;
}
