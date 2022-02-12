import {useState, useEffect} from 'react';
import BlogList from './bloglist' 
const Home = () => {
    const[blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)
    
    useEffect(() =>{
        fetch('http://localhost:3005/blogs')
        .then(res =>{
            if(!res.ok){
                throw Error('Could not fetch data');

            }

            return res.json();
        })
        .then(data => {
            setBlogs(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err =>{
            setError(err.message);
            setIsPending(false);
            
        })
    },[]) 
    
    return (
        <div className="home">
            {error && <div> {error}</div>}
            {isPending && <div> loading....</div>}
        
            {blogs &&  <BlogList blogs={blogs} title= "All blogs" />}
           

        </div>
    )
}
 
export default Home;