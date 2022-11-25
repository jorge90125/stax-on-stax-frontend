import React, {useState} from "react"

const RecordContainer = (props) => {
    let sortedRecords = props.records

    const [sortedField, setSortedField] = useState('artist')

    sortedRecords.sort((a, b) => {
        if (a[sortedField] < b[sortedField]) {
            return -1
        }
        if (a[sortedField] > b[sortedField]) {
            return 1
        }
        return 0
    })

    return(
        <div>
            <h1>This is the record container.</h1>
            <table>
                <tr>
                    <th>Artwork</th>
                    <th>Artist<button onClick={() => setSortedField('artist')}>^</button></th>
                    <th>Album<button onClick={() => setSortedField('name')}>^</button></th>
                    <th>Year<button onClick={() => setSortedField('release_year')}>^</button></th>
                    <th>Genre<button onClick={() => setSortedField('genre')}>^</button></th>
                </tr>
                {sortedRecords.map((record) => {
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