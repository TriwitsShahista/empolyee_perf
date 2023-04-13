import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import EmpReg from "./components/EmpReg";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<EmpReg/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
