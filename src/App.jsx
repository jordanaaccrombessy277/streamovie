import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Home,Welcome} from "./pages"

function App() {

  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Welcome />}/>
          <Route path="/home" element={<Home />}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
