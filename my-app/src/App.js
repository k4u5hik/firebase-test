// import logo from './logo.svg';
import { Route, Routes } from "react-router";
import './App.css';
import Character from "./pages/Character";
import CharactersList from './pages/CharactersList';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' component={<CharactersList />}>
        <Route path='/:id' component={<Character />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
