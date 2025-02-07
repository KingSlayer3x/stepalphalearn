'use client'
import styles from "../page.module.css";

import { useEffect, useState } from "react";

export default function Api(){
    const [name,setNames] = useState(''); 
    const [id,setIds] = useState(''); 
    const [title,setTitles] = useState(''); 

    const [posts,setPosts]=useState([]);



    useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(a => a.json()).then(data => setPosts(data));

},[]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, id, title }), // Send data as an object
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
              setPosts([...posts, data]);
              setNames('');
              setIds('');
              setTitles(''); // Clear individual state variables
            });
        };
    return (
        <div>
            <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setNames(e.target.value)} />
        </label>
        <br />
        <label>
          ID:
          <input type="number" name="id" value={id} onChange={(e) => setIds(e.target.value)} />
        </label>
        <br />
        <label>
          Title:
          <input type="text" name="title" value={title} onChange={(e) => setTitles(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id} - {post.title} by {post.name}
          </li>
        ))}
      </ul>
        </div>
    );
}