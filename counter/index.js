function LoginToggle() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false); 
    
    function toggleLogin() {
        setIsLoggedIn(!isLoggedIn);
    }
    
    return (
        <div>
            <h1>{isLoggedIn ? "Logged In" : "Logged Out"}</h1> 
            <button onClick={toggleLogin}>{isLoggedIn ? "Log Out" : "Log In"}</button>
        </div>
    );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<LoginToggle />);
