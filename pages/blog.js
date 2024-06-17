import React, { useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

//Step 1 : Collect all files from blogdata directory
//step2 : Iterate through them and display them

const Blog = (props) => {

  const [blogs,setBlogs]=useState(props.allBlogs);
  // useEffect(()=>{
  //   fetch('http://localhost:3000/api/blogs').then((a)=>{
  //     return a.json();})
  //     .then((parsed)=>{
  //       setBlogs(parsed)
  //   })
  // },[])
  return (
    <div className={`${styles.main} ${styles.container}`}>
      {blogs.map((blogitem)=>{
        return <div key ={blogitem.slug} className={styles.blogItem}>
        <Link href={`/blogpost/${blogitem.slug}`}>
        <h3>{blogitem.title}</h3></Link>
        <p className={styles.description}>{blogitem.metadesc.substr(0,300)}</p>
      </div>
      })}
    </div>
  )
}

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs=await data.json()
      
  return { 
    props: { allBlogs }, 
  }
}


export default Blog
