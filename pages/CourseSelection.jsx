function CourseSelection(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("./questions/bots.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((json) => {
        setData((ar) => {
            let temp = [...ar];
            temp.push(json);
            console.log(temp);
            return temp;
          });
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
    fetch("./questions/scamming.json")
      .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((json) => {
          setData((ar) => {
            let temp = [...ar];
            temp.push(json);
            console.log(temp);
            return temp;
          });
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    fetch("./questions/malware.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((json) => {
        setData((ar) => {
            let temp = [...ar];
            temp.push(json);
          console.log(temp);
            return temp;
          });
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
      console.log(data);
  }, [data])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Course selection</h1>

      {data.map((item) => (
        <div key={Math.random()}>
          <h2>{item.courseName}</h2>
        </div>
      ))}
    </div>
  );
}
