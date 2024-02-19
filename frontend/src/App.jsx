import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(
          "https://newsapi.org/v2/everything?q=bitcoin&limit=5&apiKey=3b79b0e2b3804be98a197a32ffaadc47"
        )
          .then((res) => res.json())
          // .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
