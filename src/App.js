
import './App.css';
import Navbar from './navbar';
import Home from './home';
function App() {
  //dyamic value
  const link="https://www.google.com"; 
  const title = 'Welcome to my blog page';
  //we cant output objecta and boolean in react
  // const person = {name: "Delyce", age: 19 };
  return (
    <div className="App">
      <Navbar/>
     <div className="content">
       <Home />



       
     </div>
    </div>
  );
}

export default App;
