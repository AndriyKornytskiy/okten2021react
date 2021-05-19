import {useEffect, useState} from "react";

export default function Lists() {

    let [lists, setLists] = useState([]);

    useEffect(()=> {
        fetch('https://reqres.in/api/users?page=1')
            .then(value => value.json())
            .then(value => {
                setLists(value.data)
            });
    },[])

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            {
                lists.map(value => <div key={value.id}>
                    <h3>{value.id} : {value.first_name}</h3>
                    <img src={value.avatar} alt={value.first_name}/>
                </div>)
            }
        </div>
    );
}