import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import NavMenu from "./components/navMenu/NavMenu";
import Routes from "./components/routes/Routes";

export default function App() {
    return (
        <Router>
            <div>
                <NavMenu/>
                <hr/>
                <Routes/>
            </div>
        </Router>
    );
}