import './App.scss'
import { BrowserRouter, Route, Routes} from "react-router-dom"
// import Homepage from "./pages/Homepage";
// import About from "./pages/About";
import Navbar from "./components/navbar";
import {routes} from "./helpers/routes.tsx";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
         <Routes>
             {
                 routes.map((route) => (
                     <Route key={route.path} path={route.path} element={route.element} />
                 ))
             }
         </Routes>
      </BrowserRouter>
  )
  }

export default App
