import './App.css';
import Header from '../Components/Header/Header';
import Body from '../Components/Body/Body';
import Logo from '../Components/Logo/Logo';
import Loading from '../Components/Loading/Loading'

function App() {
  return (
    <div className="Home">
      <Logo/>
      <Header/>
      <Body/>
      <Loading/>
    </div>
  );
}

export default App;
