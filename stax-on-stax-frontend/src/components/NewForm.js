const NewForm = (props) => {
    return(
        <div>
            <h1>Add a new record!</h1>
            <form id='addForm' onSubmit={props.addRecord}>
                <label htmlFor='name'>Album Name: </label>
                <input type='text' id='name' name='name' />
                <label htmlFor='name'>Artist Name: </label>
                <input type='text' id='artist' name='artist' />
                <label htmlFor='name'>Album Artwork URL: </label>
                <input type='text' id='artwork_url' name='artwork_url' />
                <label htmlFor='name'>Release Year: </label>
                <input type='number' id='release_year' name='release_year' />
                <label htmlFor='name'>Pressing Year: </label>
                <input type='number' id='pressing_year' name='pressing_year' />
                <label htmlFor='name'>Genre: </label>
                <input type='text' id='genre' name='genre' />
                <label htmlFor='name'>Record Label: </label>
                <input type='text' id='record_label' name='record_label' />
                <label htmlFor='name'>Catalog Number: </label>
                <input type='text' id='catalog_num' name='catalog_num' />
                <label htmlFor='name'>Country: </label>
                <input type='text' id='country' name='country' />
            </form>
            <div class='addBtnDiv'>
                <button className='formBtn' type='submit' form='addForm'>Add Record</button>
            </div>
        </div>
    )
}

export default NewForm