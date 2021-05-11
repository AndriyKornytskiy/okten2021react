import {useEffect, useState} from "react";
import {getPosts} from "../../services/api.services";
import Post from "../post/Post";
import './Posts.css';

export default function Posts({match: {url}}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]));
    }, []);

    return (
        <div>
            <div>
                {
                    posts.map(value => <Post key={value.id}
                                             item={value}
                                             url={url}/>)
                }
            </div>
        </div>
    );
}