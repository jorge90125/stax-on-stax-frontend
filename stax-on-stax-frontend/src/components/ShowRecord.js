const ShowRecord = (props) =>{
    return(
        <div>
            <div>
                <img src={props.record.artwork_url} alt={props.record.name} />
            </div>
            <div>
                <div>Album Name:</div><div>{props.record.name}</div>
            </div>
            <div>
                <div>Artist:</div><div>{props.record.artist}</div>
            </div>
            <div>
                <div>Release Year:</div><div>{props.record.release_year}</div>
            </div>
            <div>
                <div>Pressing Year:</div><div>{props.record.pressing_year}</div>
            </div>
            <div>
                <div>Genre:</div><div>{props.record.genre}</div>
            </div>
            <div>
                <div>Record Label:</div><div>{props.record.record_label}</div>
            </div>
            <div>
                <div>Catalog Number:</div><div>{props.record.catalog_num}</div>
            </div>
            <div>
                <div>Country:</div><div>{props.record.country}</div>
            </div>
            <button onClick={() => props.deleteRecord(props.record.id)}>Delete Record</button>
            <button onClick={() => props.navigate('editform')}>Edit Record</button>
            <button onClick={() => props.navigate('records')}>Back to Records</button>
        </div>
    )
}

export default ShowRecord