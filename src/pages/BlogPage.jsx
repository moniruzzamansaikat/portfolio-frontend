import React from 'react'
import Helmet from 'react-helmet'
import '../styles/BlogPage.css'

function BlogPage() {
  return (
    <div className="blog_page pt-5">
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="List of projects built by Moniruzzaman Saikat." />
        <meta
          name="keywords"
          content="web development, web design, programming , saikim, saikat, moniruzzaman saikat, moniruzzamansaikat, freelance web developer, freelance web programmer, "
        />
      </Helmet>
      <div className="container mt-5">
        <div className="text-center mt-5">
          <img src="/img/blog.png" alt="" className="empty_blog_image" />
          <h2 className="mt-3">Blog is coming soon:)</h2>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
