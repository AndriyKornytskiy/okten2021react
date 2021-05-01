import {useEffect, useState} from "react";
import User from "../user/User";
import './Users.css'

export default function Users() {

    let [users, setUsers] = useState([]);
    let  [singleUser, setSingleUser] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
               setUsers([...value]);
            });
    }, []);

    const search = (id)=> {
        const searchedUser = users.find(value => value.id === id);
        setSingleUser(searchedUser);
    }


    return (
        <div className={'wrap'}>
            <div className={'users-box'}>
                {
                    users.map(value => <User key={value.id} item={value} search={search}/>)
                }
            </div>
            <div className={'single-user-box'}>
                {
                    singleUser && <div>
                        name: {singleUser.name} <br/>
                        tel: {singleUser.phone} <br/>
                        city: {singleUser.address.city} <br/>
                        str: {singleUser.address.street} <br/>
                        web: {singleUser.website} <br/>
                        works-in: {singleUser.company.name};
                    </div>

                }
            </div>
        </div>
    );
}