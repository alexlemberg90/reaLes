import {useDispatch, useSelector} from "react-redux";
import Post from "../Post/Post";
import {useEffect} from "react";
import {postActions} from "../../redux";

export default function Posts() {
    const dispatch = useDispatch();
    const {posts, error, loading, postInfo} = useSelector(state => state.postReducer)

    useEffect(() => {
        dispatch(postActions.getAllPosts())
    }, [])
    return (<div>
            {postInfo && postInfo.body}
            <hr/>
            {loading && <h1>LOADING $$$$$$$$$$$$</h1>}
            {error && <h2>Some ERROR........</h2>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}