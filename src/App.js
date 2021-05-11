import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import UserDetailsComponent from "./components/userDetailsComponent/UserDetailsComponent";

export default function App() {
    return (
        <Router>
            <div>
                <div><Link to={'users'}>to users</Link></div>
                <div><Link to={'posts'}>to posts</Link></div>
                <Switch>
                    <Route exact={true} path={'/users'} render={(props)=>
                        <Users {...props}/>}/>
                    <Route exact={true} path={'/posts'} render={(props)=>
                        <Posts {...props}/>}/>
                    <Route exact={true} path={'/users/:id'} render={(props )=> {
                        let {match: {params: {id}}} = props;
                        return <UserDetailsComponent userId={id}/>;}
                    }/>

                    <Route exact={true} path={'/posts/:id'} render={()=> <div>post datails</div>}/>
                </Switch>
            </div>
        </Router>
    );
}