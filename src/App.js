import {BrowserRouter,Routes, Route} from "react-router-dom"
import Home from "./component/Home";
import DashboardCard from "./component/Dashboard/DashboardCard";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}>
    <Route path='/DashboardCard' element={<DashboardCard/>}/>
 </Route>
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
