import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

//Step 1 : Collect all files from blogdata directory
//step2 : Iterate through them and display them

const Blog = () => {
  const [blogs,setBlogs]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      return a.json();})
      .then((parsed)=>{
        setBlogs(parsed)
    })
  },[])
  return (
    <div className={`${styles.main} ${styles.container}`}>
      {blogs.map((blogitem)=>{
        return <div key ={blogitem.slug} className={styles.blogItem}>
        <Link href={`/blogpost/${blogitem.slug}`}>
        <h3>{blogitem.title}</h3></Link>
        <p className={styles.description}>{blogitem.content.substr(0,300)}</p>
      </div>
      })}
    </div>
  )
}

export default Blog
