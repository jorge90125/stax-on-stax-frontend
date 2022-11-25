const RecordContainer = (props) => {
    return(
        <div>
            <h1>This is the record container.</h1>
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
                        <tr onClick={() => props.showRecord(record.id)}>
                            <td>Art Here</td>
                            <td>{record.artist}</td>
                            <td>{record.name}</td>
                            <td>{record.release_year}</td>
                            <td>{record.genre}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default RecordContainer