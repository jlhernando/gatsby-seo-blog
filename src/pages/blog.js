import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
     const data = useStaticQuery(graphql`
     query {
          allContentfulBlogPost (
            sort: {
              fields:publisedDate,
              order:DESC
            }
          ) {
               edges {
                    node {
                         title
                         slug
                         publisedDate(formatString:"Do MMMM, YYYY")
                         }
                    }
               }
        }
     `)

     return (

          <Layout>
          <Head title="Blog" />
               <h1>Blog</h1>
               <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                         return (
                              <li className={blogStyles.post}>
                                   <Link to={`/blog/${edge.node.slug}`}>
                                   <h2>{edge.node.title}</h2>
                                   <p>{edge.node.publisedDate}</p>
                                   </Link>
                              </li>
                         )
                    })}
               </ol>


          </Layout>
     )
}

export default BlogPage