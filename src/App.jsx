import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Components/Signin";
import HomePage from "./Components/homePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignIn/>}/>
        <Route path="homepage" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>      
  )
}

export default App;