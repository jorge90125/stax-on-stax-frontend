import React, {useEffect, useState} from "react"

const RecordContainer = (props) => {
    let sortedRecords = props.records

    const [sortConfig, setSortConfig] = useState('artist')

    sortedRecords.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
    })

    const requestSort = key => {
        let direction = 'ascending'
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
          direction = 'descending'
        }
        setSortConfig({ key, direction })
    }

    useEffect(() => {
        requestSort('artist')
    }, [])

    return(
        <div>
            <h1>This is the record container.</h1>
            <table>
                <tr>
                    <th>Artwork</th>
                    <th>Artist<button onClick={() => requestSort('artist')}>^</button></th>
                    <th>Album<button onClick={() => requestSort('name')}>^</button></th>
                    <th>Year<button onClick={() => requestSort('release_year')}>^</button></th>
                    <th>Genre<button onClick={() => requestSort('genre')}>^</button></th>
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