import { BrowserRouter ,Route , Routes } from "react-router";
import LoginPage from "./Pages/login";
import SignUpPage from "./Pages/signup";
import HomePage from "./Pages/home";

function App(){
  return(
    <>
      <BrowserRouter>
          <Routes>
              {/* <Route path="/" element={<HomePage/>}></Route> */}
              <Route path="/" element={<LoginPage/>}></Route>
              <Route path="/signup" element={<SignUpPage/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;