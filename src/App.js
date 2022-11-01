import { Route, Routes } from "react-router-dom";
import Register from "./page/register/Register";
import Login from "./page/login/Login";


function App() {

 
  return (
    <div className="App">
      <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
