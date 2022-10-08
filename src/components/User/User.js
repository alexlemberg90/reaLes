export default function User({user}) {
    const {id,name,email} = user;
    return (<div>
            id - {id}<br/>
            name - {name}<br/>
            email - {email}
        </div>
    );
}