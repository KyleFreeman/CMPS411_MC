import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Components/Header';
import Body from '../Components/Body';

function App() {
  const [data, setData] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/home")
    .then(res => res.text())
    .then(data => setData(data))
  }, [])

  return (
    <div className="Home">
      <Header/>
      <Body/>
      <p>{data}</p>
    </div>
  );
}

export default App;
