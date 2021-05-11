import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
export default function Post({item, url}) {
    return (
        <div>
            {item.title} -
            <Link to={url + '/' + item.id}>post {item.id} datails</Link>
        </div>
    );
}