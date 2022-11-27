import React, {useEffect, useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <h1>Welcome to your STAX.</h1>
            <table>
                <tr>
                    <th>Artwork</th>
                    <th>Artist<button onClick={() => requestSort('artist')} class='upDown'><FontAwesomeIcon icon="fa-solid fa-up-down" size="2x"/></button></th>
                    <th>Album<button onClick={() => requestSort('name')} class='upDown'><FontAwesomeIcon icon="fa-solid fa-up-down" size="2x"/></button></th>
                    <th>Year<button onClick={() => requestSort('release_year')} class='upDown'><FontAwesomeIcon icon="fa-solid fa-up-down" size="2x"/></button></th>
                    <th>Genre<button onClick={() => requestSort('genre')} class='upDown'><FontAwesomeIcon icon="fa-solid fa-up-down" size="2x"/></button></th>
                </tr>
                {sortedRecords.map((record) => {
                    return(
                        <tr onClick={() => props.showRecord(record.id)}>
                            <td><img class='containerImage' src={record.artwork_url} alt={record.name} /></td>
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