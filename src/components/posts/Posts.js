import {useEffect, useState} from "react";
import {getPosts} from "../../services/api.services";
import Post from "../post/Post";
import './Posts.css';

export default function Posts() {

    let [posts, setPosts] = useState([]);

    let [serchedPost, setSerchedPost] = useState(null);

    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]));
    }, []);

    const readPost = (id) => {
        let findedPost = posts.find(value => value.id === id);
        setSerchedPost(findedPost);
    }

    return (
        <div className={'wraper'}>
            <div className={'posts-box'}>
                {
                    posts.map(value => <Post key={value.id} item={value} readPost={readPost}/>)
                }
            </div>
            <div className={'single-post-box'}>
                {
                    serchedPost && <div>
                        <h1>id: {serchedPost.id}</h1> <br/>
                        <h2>user_Id: {serchedPost.userId}</h2> <br/>
                        <h4>title: {serchedPost.title}</h4> <br/>
                        <p>body: {serchedPost.body}</p>
                    </div>
                }
            </div>
        </div>
    );
}