function App(){
  let [page, setPage] = useState(<Home />);
  window.setPage = function(n){
    setPage(n);
  }
  return <>
    {page}
  </>;
}
