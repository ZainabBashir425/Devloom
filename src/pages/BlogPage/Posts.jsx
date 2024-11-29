import React from 'react';
import {BlogImg8,BlogImg9,BlogImg10} from '../../assets';
import PostCard from './PostCard';
import styles from '../../css/Blogs/RecentPosts.module.css';


const Posts= () =>  {
    const posts=[
        {
            postImage:BlogImg8,
            postTitle:"Travel",
            postTopic:"8 Rules of Travelling In Sea You Need To Know",
            postDate:"13 March 2023",
            postDescription:"Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs "
        },
        {
            postImage:BlogImg9,
            postTitle:"Development",
            postTopic:"How to build strong portfolio and get a Job in UI/UX",
            postDate:"11 March 2023",
            postDescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from "
        },
        {
            postImage:BlogImg10,
            postTitle:"Sports",
            postTopic:"How to Be a Professional Footballer in 2023",
            postDate:"10 March 2023",
            postDescription:"Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive"
        }
    ]
  return (
    <>
    <div className={styles.postsWrapper}>
    {posts.map((post,index)=>{
        return (<PostCard postImage={post.postImage} postDate={post.postDate} postTitle={post.postTitle} postTopic={post.postTopic} postDescription={post.postDescription} key={index}/>)
    })}
     {posts.map((post,index)=>{
        return (<PostCard postImage={post.postImage} postDate={post.postDate} postTitle={post.postTitle} postTopic={post.postTopic} postDescription={post.postDescription} key={index}/>)
    })}
    </div>
      
    </>
  )
}

export default Posts
