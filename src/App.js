import UserComponent from "./components/user/user.component";
import {useState} from "react";

export default function App() {

    let usersList = [
        {
            name: 'vasya',
            age: 31,
            status: false,
            address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
        }, {
            name: 'petya',
            age: 30,
            status: true,
            address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
        }, {
            name: 'kolya',
            age: 29,
            status: true,
            address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
        }, {
            name: 'olya',
            age: 28,
            status: false,
            address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
        }, {
            name: 'max',
            age: 30,
            status: true,
            address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
        }, {
            name: 'anya',
            age: 31,
            status: false,
            address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
        }, {
            name: 'oleg',
            age: 28,
            status: false,
            address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
        }, {
            name: 'andrey',
            age: 29,
            status: true,
            address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
        }, {
            name: 'masha',
            age: 30,
            status: true,
            address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
        }, {
            name: 'olya',
            age: 31,
            status: false,
            address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
        }, {
            name: 'max',
            age: 31,
            status: true,
            address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
        }];

    let [users, setUsers] = useState(usersList)

    const deleteUser = () => {
        users.pop();
        setUsers([...users])
    }

    let [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(++counter)
    }
    const increment100 = () => {
        setCounter(counter += 100)
    }
    const reset = () => {
        setCounter(counter = 0)
    }
    const decrement = () => {
        setCounter(--counter)
    }
    const decrement100 = () => {
        setCounter(counter -= 100)
    }

    return (
        <div>
            <div>
                counter is : {counter}
                <br/>
                <button onClick={increment}>increment</button>
                <button onClick={increment100}>increment100</button>
                <button onClick={reset}>reset</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={decrement100}>decrement100</button>

            </div>


            <div>{
                users.map((value, index) =>
                    <UserComponent key={index}
                                   {...value}
                    />
                )
            }
                <button onClick={deleteUser}>delete user</button>
            </div>

        </div>
    );
}