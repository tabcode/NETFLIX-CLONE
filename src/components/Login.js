function Login(props) {
    return (
        <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere, Cancel at any time.</h2>
            <h3>
                Ready to watch? Enter your email to create or restar your memership.
            </h3>
            <div className="loginScreen__input">
                <form>
                    <button
                        onClick={() => props.setSignIn(true)}
                        className="loginScreen__getStarted"
                    >
                        GET STARTED
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login;