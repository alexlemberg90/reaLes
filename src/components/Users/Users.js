import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import User from "../User/User";
import {userActions} from "../../redux";

export default function Users() {

    const dispatch = useDispatch();
    const {users, error, loading, userFromApi,userInfo} = useSelector(state => state.userReducer);

    useEffect(() => {

        // userService.getAll().then(({data})=>dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll())
    }, [])

    return (<div>
            <hr/>
            {
                userInfo && JSON.stringify(userInfo)
            }
            <hr/>
            {userFromApi && userFromApi.name}
            {loading && <h1>Loading^^^^^^^^^^^</h1>}
            {error && <h1>ERROR</h1>}
            {users.map(user => <User key={user.id} user={user}/>)}
            <hr/>
            {
                userInfo && userInfo.name
            }
            <hr/>
        </div>
    );
}