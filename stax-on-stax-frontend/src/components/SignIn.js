const SignIn = (props) => {
    return(
        <div>
            <h1>Welcome! Please sign-in or click the register tab to register.</h1>
            <form onSubmit={props.login}>
                <label htmlFor='name'>Email: </label>
                <input type='text' id='email' name='email' />
                <label htmlFor='name'>Password: </label>
                <input type='text' id='password' name='password' />
                <input class='formBtn' type='submit' value='Log In' />
            </form>
        </div>
    )
}

export default SignIn