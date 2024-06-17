import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

//Step1: Find the file corresponding to the slug
//Step2: Populate through them inside the page
const slug = (props) => {
  function createMarkup(c){
    return {__html: c};
  }
  const [blog,setBlog] = useState(props.myBlog);
  // const router=useRouter();
  //   useEffect(()=>{
  //     if(!router.isReady) return;
  //   const {slug} = router.query;
  //     fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
  //     return a.json();
  //   })
  //     .then((parsed)=>{
  //       setBlog(parsed)
  //   })
  //   },[router.isReady])   
  return (
    <div className={styles.container}>
      <main className={`${styles.main}`}>
      <div className={styles.title}>
      <h1>{blog && blog.title}</h1>
      </div>
      <hr/>
      {blog && <div className={styles.description} dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
      <div className={styles.author}>
        By - {blog.author}
      </div>
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  
    const {slug} = context.query;
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    let myBlog=await data.json();
      
  return { 
    props: { myBlog }, 
  }
}    

export default slug
