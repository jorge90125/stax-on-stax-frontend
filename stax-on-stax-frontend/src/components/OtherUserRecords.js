const OtherUserRecords = (props) => {
    return(
        <div>
            <h1>{`${props.records[0].owner.username}'s Collection`}</h1>
            <table>
                <tr>
                    <th>Artwork</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Year</th>
                    <th>Genre</th>
                </tr>
                {props.records.map((record) => {
                    return(
                        <tr>
                            <td><img class='containerImage' src={record.artwork_url} alt={record.name} /></td>
                            <td>{record.artist}</td>
                            <td>{record.name}</td>
                            <td>{record.release_year}</td>
                            <td>{record.genre}</td>
                        </tr>
                    )
                })}
            </table>
            <div class='addBtnDiv'>
                <button class='showBtn' onClick={() => {props.navigate('allusers')}}>Back to All Users</button>
            </div>
        </div>
    )
}

export default OtherUserRecords