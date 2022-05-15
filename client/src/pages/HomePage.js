import axios from "axios";
import { useEffect, useState } from "react";

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/items")
      .then((res) => {
        setData(JSON.stringify(res.data));
      })
      .catch((err) => setData("Error: " + err.message));
  }, [setData]);

  return (
    <div>
      <div>Welcome to our webpage!</div>
      <div>Server data: {data ?? "Fetching.."}</div>
    </div>
  );
}

export default HomePage;
