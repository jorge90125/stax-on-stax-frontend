const Register = (props) => {
    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={props.register}>
                <label htmlFor='name'>Username: </label>
                <input type='text' id='name' name='username' />
                <label htmlFor='name'>Email: </label>
                <input type='text' id='email' name='email' />
                <label htmlFor='name'>Password: </label>
                <input type='text' id='password' name='password' />
                <input class='formBtn' type='submit' value='Register' />
            </form>
        </div>
    )
}

export default Register