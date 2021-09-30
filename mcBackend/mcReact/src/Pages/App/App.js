import './App.css';
import Header from '../../Components/Header/Header';
import Body from '../../Components/Body/Body';
import Logo from '../../Components/Logo/Logo';
import Loading from '../../Components/Loading/Loading'

function App() {
  return (
    <div className="Main">
      <div className="NavBar">
        <Logo/>
      </div>

      <div className="BodyMain">
        <Header/>
        <Body/>
      </div>

      {/* <Loading/> */}
    </div>
  );
}

export default App;
