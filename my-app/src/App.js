// import logo from './logo.svg';
import { Route } from "react-router";
import './App.css';
// import Character from "./pages/Character";
import CharactersList from './pages/CharactersList';

function App() {
  return (
    <div className="App">
      <CharactersList />
      {/* <Routes> */}
        {/* <Route strict exact path="/index" component={CharactersList} /> */}
        {/* <Route strict exact path="/:id" component={Character} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
