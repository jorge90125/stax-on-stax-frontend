const OtherUserRecords = (props) => {
    let sortedRecords = props.records.sort((a,b) => {
        if (a.artist < b.artist) {
            return -1
        }
        if (a.artist > b.aritst) {
            return 1
        }
        return 0
    })

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
                    <th>Country</th>
                </tr>
                {sortedRecords.map((record) => {
                    return(
                        <tr>
                            <td><img class='containerImage' src={record.artwork_url} alt={record.name} /></td>
                            <td>{record.artist}</td>
                            <td>{record.name}</td>
                            <td>{record.release_year}</td>
                            <td>{record.genre}</td>
                            <td>{record.country}</td>
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