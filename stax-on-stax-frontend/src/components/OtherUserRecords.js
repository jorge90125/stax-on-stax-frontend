const OtherUserRecords = (props) => {
    return(
        <div>
            <h1>{`${props.records[0].owner.username}'s Collection`}</h1>
            {props.records.map((record) => {
                return(
                    <div>
                        <div>
                            <img src={record.artwork_url} alt={record.name} />
                        </div>
                        <div>
                            <div>Album Name:</div><div>{record.name}</div>
                        </div>
                        <div>
                            <div>Artist:</div><div>{record.artist}</div>
                        </div>
                    </div>
                )
            })}
            <button onClick={() => {props.navigate('allusers')}}>Back to All Users</button>
        </div>
    )
}

export default OtherUserRecords