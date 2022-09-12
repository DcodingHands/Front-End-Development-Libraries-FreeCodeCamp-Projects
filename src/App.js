import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Header';
import AutoQuote from './AutoQuote';
import Markdown from './Markdown';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="/autoquote"  element={<AutoQuote/>}/>
      <Route path="/markdown"  element={<Markdown/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
