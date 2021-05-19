import {Route, Switch} from "react-router-dom";
import Lists from "../lists/Lists";

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path={'/'} render={()=> <h1>Home</h1>}/>
                <Route exact path={'/users'} render={()=> <Lists/>}/>
            </Switch>
        </div>
    );
}