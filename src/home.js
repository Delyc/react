import {useState} from 'react';
const Home = () => {
    
    const [name, setName] = useState("Delyce")
    const [age, setAge]= useState(19)
    const handleClick = () =>{
        setName('Umuhire');
        setAge(20)
      
    }
  
    return (  
        <div className="home">
            <h2>Home page</h2>
            <p>{name} is {age} years old</p>
            
            {/* using handleClick() will invoke the function bcz of (), refresh ---- console the message */}
            <button onClick={handleClick}>Click me</button>
          
        </div>
    ); 
}
 
export default Home;