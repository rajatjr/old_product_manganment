import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import Register from "./Components/Register";
import './App.css';
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoutes/>}>
          <Route index
            element={<Login />}>
          </Route>
          <Route path="/register" element={<Register />}>
        
          

          </Route>
        </Route>

        <Route path="/dashboard" element={<PrivateRoutes />}>
          <Route index element={<Dashboard />} />
         
          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;