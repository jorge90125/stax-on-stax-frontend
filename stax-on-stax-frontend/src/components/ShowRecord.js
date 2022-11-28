const ShowRecord = (props) =>{
    return(
        <div class='showDiv'>
            <div>
                <img src={props.record.artwork_url} alt={props.record.name} class='showImg' />
            </div>
            <div class='showRow odd'>
                <div>Album Name:</div><div>{props.record.name}</div>
            </div>
            <div class='showRow'>
                <div>Artist:</div><div>{props.record.artist}</div>
            </div>
            <div class='showRow odd'>
                <div>Release Year:</div><div>{props.record.release_year}</div>
            </div>
            <div class='showRow'>
                <div>Pressing Year:</div><div>{props.record.pressing_year}</div>
            </div>
            <div class='showRow odd'>
                <div>Genre:</div><div>{props.record.genre}</div>
            </div>
            <div class='showRow'>
                <div>Record Label:</div><div>{props.record.record_label}</div>
            </div>
            <div class='showRow odd'>
                <div>Catalog Number:</div><div>{props.record.catalog_num}</div>
            </div>
            <div class='showRow last'>
                <div>Country:</div><div>{props.record.country}</div>
            </div>
            <div class='showBtnDiv'>
                <button class='showBtn' onClick={() => props.deleteRecord(props.record.id)}>Delete Record</button>
                <button class='showBtn' onClick={() => props.navigate('editform')}>Edit Record</button>
                <button class='showBtn' onClick={() => props.navigate('records')}>Back to Records</button>
            </div>
        </div>
    )
}

export default ShowRecord