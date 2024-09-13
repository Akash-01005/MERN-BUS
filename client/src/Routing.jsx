import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./components/admin/Dashboard"

const Routing = () => {
  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path="/admin/dashboard" element={<Dashboard />}></Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default Routing