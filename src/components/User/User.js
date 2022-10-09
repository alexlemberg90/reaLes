import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

export default function User({user}) {
    const dispatch = useDispatch();
    const {id, name} = user;
    return (<div>
            id - {id}<br/>
            name - {name}<br/>
            <button onClick={() => dispatch(userActions.setOneUser(user))}>Info</button>
            <button onClick={() => dispatch(userActions.getById({id}))}>getFromApi</button>
            <button onClick={() => dispatch(userActions.deleteById(id))}>Delete</button>
        </div>
    );
}