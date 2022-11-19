const RecordContainer = (props) => {
    return(
        <div>
            <h1>This is the record container.</h1>
            {props.records.map((record) => {
                return(
                    <div>
                        <h2>{record.artist}</h2>
                        <h2>{record.name}</h2>
                        <h2>{record.release_year}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default RecordContainer