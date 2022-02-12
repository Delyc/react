const Home = () => {
    const handleClick = () =>{
        console.log("Hello there!");
    }
    const handleClickAgain= (name) =>{
        console.log("hello" + name);

    }
    return (  
        <div className="home">
            <h2>Home page</h2>
            {/* using handleClick() will invoke the function bcz of (), refresh ---- console the message */}
            <button onClick={handleClick}>Click me</button>
            <button onClick={() =>{
                handleClickAgain(' Delyce')
            } }>Click ma again</button>
        </div>
    ); 
}
 
export default Home;