import React, { useEffect, useState } from 'react'
import './index.css'
import { Toaster, toast } from 'react-hot-toast'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function Home() {
    const [search, setSearch] = useState('')
    const [posts, setPosts] = useState([])
    const [newPost, setNewPost] = useState({ title: "", body: "" })

    useEffect(() => {
        axios.get(`http://localhost:5000/posts`)
            .then(response => {
                setPosts(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    function validate() {
        if (!newPost.title) {
            alert("Please enter title!")
            return false
        } else if (newPost.title.length < 3) {
            alert("The title must be at least 3 characters long")
            return false
        }

        if (!newPost.body) {
            alert("Please enter text!")
            return false
        }

        return true
    }

    function handleAddPost(event) {
        event.preventDefault()

        let isValid = validate()
        if (!isValid) {
            return
        }

        axios.post(`http://localhost:5000/posts`, newPost)
            .then(response => {
                setPosts([...posts, response.data])
                toast.success("Blog added successfully!")
            })
            .catch(error => {
                console.log(error);
                toast.error("Failed to add blog")
            })

        setNewPost({ title: "", body: "" })
    }

    function handleDeletePost(id) {
        axios.delete(`http://localhost:5000/posts/${id}`)
            .then(() => {
                setPosts(posts.filter(post => post.id !== id))
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='container-home'>
            <h1 className='title'>Blogs</h1>
            <input value={search} onChange={(e) => { setSearch(e.target.value) }} className='search' type="search" placeholder='Search for title...' />
            <form className="formTwo">
                <label htmlFor="title">Blog's title</label>
                <input value={newPost.title} onChange={(e) => { setNewPost({ ...newPost, title: e.target.value }) }} type="text" name="title" id="title" placeholder="Enter your blog's title..." />
                <label htmlFor="text">Blog's text</label>
                <textarea value={newPost.body} onChange={(e) => { setNewPost({ ...newPost, body: e.target.value }) }} name="text" id="text" placeholder="Enter your blog's text..."></textarea>
                <button onClick={handleAddPost} className="add">Add Blog</button>
                <Toaster />
            </form>

            <ul>
                {
                    posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase())).map(post => (
                        <li key={post.id}>
                            <NavLink className="link" to={`/postDetails/${post.id}`}>{post.title}</NavLink>
                            <button onClick={() => handleDeletePost(post.id)} className="deletePost">Delete Blog</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Home
