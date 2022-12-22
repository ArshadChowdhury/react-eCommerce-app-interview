import Header from "./components/Header/Header";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
  )
}

export default App
