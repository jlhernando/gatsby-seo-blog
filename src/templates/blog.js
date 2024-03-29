import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
import { Link } from 'gatsby'
import Layout from '../components/layout'



export const query = graphql`
     query ($slug: String!) {
          contentfulBlogPost (slug: {eq: $slug}) {
          title
          publisedDate(formatString: "MMMM YYYY")
          body {
               json
          }
          }
     }
`

const Blog = props => {
     const options = {
          renderNode: {
               "embedded-asset-block": node => {
                    const alt = node.data.target.fields.title['en-US']
                    const url = node.data.target.fields.file['en-US'].url
                    
                    return <img alt={alt} src={url} />
               }
          }
     }
     return (
          <Layout>
               <Head title={props.data.contentfulBlogPost.title} />
               <h1>{props.data.contentfulBlogPost.title}</h1>
               <p>{props.data.contentfulBlogPost.publisedDate}</p>
               {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
               <Link to="/blog">Back</Link>
          </Layout>
     )
}

export default Blog