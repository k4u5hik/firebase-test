// import logo from './logo.svg';
import './App.css';
import Character from "./pages/Character";
import CharactersList from './pages/CharactersList';
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' component={<CharactersList />} />
      <Route path='/:id' component={<Character />} />
    </Routes>
    </div>
  );
}

export default App;
