import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Register from "../components/Authentication/Register";
import Counter from "../components/Authentication/Counter";
import Login from "../components/Authentication/Login";
import Rg from "../components/Authentication/Rg";
import App from "../App";

export default function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                {/* <Route path="/rg" element={<Rg/>}/> */}
                <Route path="/login" element={<Login/>} />
                <Route path="/et" element={<App/>} >
                </Route>
            </Routes>
        </Router>
    )
}