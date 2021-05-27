import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";



const Posts = () => {

    const store = useSelector((store) => store);

    const dispatch = useDispatch();


    useEffect(() => {
    dispatch({type: "SET_IS_LOADING"});
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                dispatch({type: "SET_POSTS", payload: value});

                dispatch({type: "RESET_IS_LOADING"});

                console.log(value);
            });

    },[])


    if (store.isLoading){
        return (
            <h1>LOADING!!!</h1>
        )
    }

    return (
        <div>
            {
                store.posts.map((post) => (
                    <p key={post.id}>{post.id}: {post.title} = {post.body}</p>
                ))
            }
        </div>
    )
}

export default function App() {
    return (
        <div>
            <Posts/>
        </div>
    );
}