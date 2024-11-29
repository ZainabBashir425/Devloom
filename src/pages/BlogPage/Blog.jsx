import React from 'react'
import BlogSection from './BlogSection'
import BlogCard from './BlogCard'
import RecentPosts from './RecentPosts';
import Posts from './Posts';
import JoinTeam from './JoinTeam';

function Blog() {
  return (
    <>
      <BlogSection />
      <BlogCard />
      <RecentPosts/>
      <Posts/>
      <JoinTeam/>
    </>
  )
}

export default Blog
