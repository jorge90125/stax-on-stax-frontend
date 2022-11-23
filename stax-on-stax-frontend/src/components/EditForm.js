import React, {useState} from "react"

const EditForm = (props) => {
    const [record, setRecord] = useState(props.record)

    const handleChange = (e) => {
        setRecord((prev) => ({...record, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.editRecord(record)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Album Name: </label>
                <input type='text' id='name' name='name' value={record.name} onChange={handleChange} />
                <label htmlFor='name'>Artist Name: </label>
                <input type='text' id='artist' name='artist' value={record.artist} onChange={handleChange} />
                <label htmlFor='name'>Album Artwork URL: </label>
                <input type='text' id='artwork_url' name='artwork_url' value={record.artwork_url} onChange={handleChange} />
                <label htmlFor='name'>Release Year: </label>
                <input type='number' id='release_year' name='release_year' value={record.release_year} onChange={handleChange} />
                <label htmlFor='name'>Pressing Year: </label>
                <input type='number' id='pressing_year' name='pressing_year' value={record.pressing_year} onChange={handleChange} />
                <label htmlFor='name'>Genre: </label>
                <input type='text' id='genre' name='genre' value={record.genre} onChange={handleChange} />
                <label htmlFor='name'>Record Label: </label>
                <input type='text' id='record_label' name='record_label' value={record.record_label} onChange={handleChange} />
                <label htmlFor='name'>Catalog Number: </label>
                <input type='text' id='catalog_num' name='catalog_num' value={record.catalog_num} onChange={handleChange} />
                <label htmlFor='name'>Country: </label>
                <input type='text' id='country' name='country' value={record.country} onChange={handleChange} />
                <input type="submit" value="Edit Record" />
            </form>
            <button onClick={() => props.navigate('showrecord')}>Back to Record Details</button>
        </div>
    )
}

export default EditForm