function App(){
  let [page, setPage] = useState(<Home />);
  window.setPage = function(n){
    setPage(n);
  }
  return <>
    <h3>Nullpoint</h3>
    <p>{window.rewards} points</p>
    {page}
  </>;
}
