import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import EmpForm from "./components/EmpForm";
import EmpReg from "./components/EmpReg";
import EmpTable from "./components/EmpTable";
import SideBar from "./components/SideBar";
import EmpPrfTable from "./components/EmpPrfTable";

function App() {

  return (
    <>
    <BrowserRouter>
    <SideBar/>
    <Routes>
      <Route exact path="/empForm" element={<EmpForm/>}/>
      <Route exact path="/empReg" element={<EmpReg/>}/>
      <Route exact path="/empPrfTable" element={<EmpPrfTable/>}/>
      <Route exact path="/empTable" element={<EmpTable/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
