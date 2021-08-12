

const Users = (props) => {

    return <div>
        {console.log(Array.isArray(props.users)), props.users.map(u => <div key={u.id}>
                    <p>{u.first_name}</p>
                </div>)}
            <br/>
            <p>uhhu</p>
    </div>
}

export default Users;