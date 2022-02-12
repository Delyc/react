import {useState} from 'react';
import BlogList from './bloglist' 
const Home = () => {
    const[blogs, setBlogs] = useState([
        { title: 'Learn css with me', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', author: 'Delyce', id:1 },
        { title: 'Learn css with me', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', author: 'Umuhire', id:2 },
        { title: 'Learn css with me', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', author: 'Delyce', id:3 },
    ])
    
    
    return (
        <div className="home">
            <BlogList blogs={blogs} title= "All blogs"/>
            <BlogList blogs={blogs.filter((blog)=>blog.author=== "Delyce")} title= "Delyce's blogs"/>

        </div>
    )
}
 
export default Home;