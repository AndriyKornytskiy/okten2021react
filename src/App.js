import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const Counter = ()=> {

    const [value, setValue] = useState(0);

    const counter = useSelector(({counter}) => counter);

    const dispatch = useDispatch();

    return(
        <>
            <h1>counter: {counter}</h1>
            <button onClick={()=> {dispatch({type: 'INC'})}}>int</button>
            <button onClick={()=> {dispatch({type: 'DEC'})}}>dec</button>
            <button onClick={()=> {dispatch({type: 'RESET'})}}>reset</button>
            <input type="number" value={value} onChange={({target: {value}})=> setValue(value)}/>
            <button onClick={()=> {dispatch({type: 'INC_CUSTOM', payload: Number(value)})}}>inc custom</button>
        </>
    );
};

export default function App() {
    return (
        <div>
            <Counter/>
        </div>
    );
}