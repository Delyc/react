
import './App.css';

function App() {
  //dyamic value
  const link="https://www.google.com"; 
  const title = 'Welcome to my blog page';
  //we cant output objecta and boolean in react
  // const person = {name: "Delyce", age: 19 };
  return (
    <div className="App">
     <div className="content">
       <h1>{title}</h1>
       {/* <p>{person}</p> */}
       <p>{"hey"}</p>
       {/* bunch all elements in a string together as an array */}
       <p>{[1, 2, 3, 5]}</p>
      {/* displaying a random number */}
       <p>{Math.random() *10}</p>
       <a href={link}> Google site</a>



       
     </div>
    </div>
  );
}

export default App;
