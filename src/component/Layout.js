import { BrowserRouter, Route,Switch } from "react-router-dom";
import Body from "./Body";
import About from "./About";

function Layout(){
    return (
        <div>
            <h1> My App</h1>
            <Route path="/home" component={Body}/>
            <Route path="/about" Component={About}/>
        </div>
    )
}

export default Layout;