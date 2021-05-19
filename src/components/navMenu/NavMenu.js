import {Link} from "react-router-dom";

export default function NavMenu() {
    return (
        <div>
            <div><Link to={'/'}><button>Home</button></Link></div>
            <div><Link to={'users'}><button>Users</button></Link></div>
        </div>
    );
}