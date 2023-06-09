import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  //state
  const [res, setRes] = useState([]);

  useEffect(() => {
    displayData();
  }, []);
  async function displayData() {
    const baseUrl = "https://api.github.com/users/megha-n-bodke";
    const { data } = await axios.get(baseUrl);
    setRes(data);
  }
  return (
    <div className="App">
      <h1>My Github Profile</h1>
      <>
        <h2>{res.name}</h2>
        <img src={res.avatar_url} alt="Profile" />
        <p>{res.bio}</p>
        <small>Public Repositories:{res.public_repos}</small>
      </>
    </div>
  );
}

export default App;
//abhishek@incubyte.co
