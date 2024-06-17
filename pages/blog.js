import React, { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import * as fs from 'fs';
//import InfiniteScroll from 'react-infinite-scroll-component';

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  

  return <div className={styles.container}>
    <main className={styles.main}>
      <div className={`${styles.main} ${styles.container}`}>
        {blogs.map((blogitem) => {
          return <div key={blogitem.slug} className={styles.blogItem}>
            <Link href={`/blogpost/${blogitem.slug}`}>
            <h3>{blogitem.title}</h3></Link>
            <p className={styles.description}>{blogitem.metadesc.substr(0,300)}</p>
            <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link>
          </div>
        })}
        </div>
     
    </main>
  </div>
};


export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
 
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }

  return {
    props: { allBlogs}, // will be passed to the page component as props
  }
}

export default Blog;