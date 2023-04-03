import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Signin" element={<Signin/>}/>
                <Route path="/Signup" element={<Signup/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes