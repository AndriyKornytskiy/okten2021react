import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <div><Link to={'users'}>to users</Link></div>
                <div><Link to={'posts'}>to posts</Link></div>
                <Switch>
                    <Route path={'/users'} render={()=> <Users/>}/>
                    <Route path={'/posts'} render={()=> <Posts/>}/>
                </Switch>
            </div>
        </Router>
    );
}