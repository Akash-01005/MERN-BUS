import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./components/admin/Dashboard"
import { SignUp } from "./components/users"

const Routing = () => {
  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path="/admin/dashboard" element={<Dashboard />}></Route>
         <Route path="/signup" element ={<SignUp />}></Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default Routing