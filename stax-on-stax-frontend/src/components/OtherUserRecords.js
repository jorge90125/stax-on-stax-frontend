const OtherUserRecords = (props) => {
    return(
        <div>
            <h1>{`${props.records[0].owner.username}'s Collection`}</h1>
            {props.records.map((record) => {
                return(
                    <div>
                        <h2>{record.name}</h2>
                        <h2>{record.artist}</h2>
                    </div>
                )
            })}
            <button onClick={() => {props.navigate('allusers')}}>Back to All Users</button>
        </div>
    )
}

export default OtherUserRecords