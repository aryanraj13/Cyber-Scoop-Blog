import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

//Step1: Find the file corresponding to the slug
//Step2: Populate through them inside the page
const slug = () => {
  const router=useRouter();
  const [blog,setBlog] = useState();
    useEffect(()=>{
      if(!router.isReady) return;
    const {slug} = router.query;
      fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
      return a.json();
    })
      .then((parsed)=>{
        setBlog(parsed)
    })
    },[router.isReady])   
  return (
    <div className={styles.container}>
      <main className={`${styles.main}`}>
      <div className={styles.title}>
      <h1>{blog && blog.title}</h1>
      </div>
      <hr/>
      <div>
        {blog && blog.content}
      </div>
      </main>
    </div>
  )
}

export default slug
