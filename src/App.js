import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


const Posts = () => {
    const {isLoading, posts} = useSelector(({isLoading, posts}) => ({
        isLoading,
        posts
    }));
    const dispatch = useDispatch();

    const fetchPosts = async () => {
        try {
            dispatch({type: 'SET_IS_LOADING'});
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();

            dispatch({type: 'SET_POSTS', payload: data});
            dispatch({type: 'RESET_IS_LOADING'});
            console.log(data);
        }catch (e) {
            console.log(e, 'fatal error');
        }
    };



    useEffect(() => {
        fetchPosts();
    },[]);

    if (isLoading) {
        return (
            <h1>LOADING DATA !!!!</h1>
        )
    }


    return (
        <div>
        {
            posts.map((post) => (
                <p key={post.id}>
                    {post.title} = {post.body}
                </p>
            ))
        }
        </div>
    );
};




export default function App() {
    return (
        <div>
            <Posts/>
        </div>
    );
}