import {postActions} from "../../redux";
import {useDispatch} from "react-redux";

export default function Post({post}) {

    const dispatch = useDispatch();
    const {id,title} = post;

    return (
            <div>
                id - {id}<br/>
                Title - {title}<br/>
                <button onClick={() => dispatch(postActions.infoPost(post))}>Body</button>
                <button onClick={() => dispatch(postActions.deletePostById(id))}>Delete</button>
            </div>

    );
}