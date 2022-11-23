const AllUsers = (props) => {
    return(
        <div>
            <h1>All Users</h1>
            {props.allUsers.map((user) => {
                return(
                    <h2>{user.username}</h2>
                )
            })}
        </div>
    )
}

export default AllUsers