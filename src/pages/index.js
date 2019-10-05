import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'

import Layout from '../components/layout'

const IndexPage = () => {
     return (
          <Layout>
          <Head title="Home" />
               <h1>Hello!</h1>
               <p>I'm Jose, a technical SEO trying to learn more about Gatsby, React and web development in general.</p>
               <p>This site is just a Gatsby test site. But soon it'll be much more!</p>
               <p>Need an SEO <Link to="/contact">Contact me.</Link></p>
          </Layout>
     )
}

export default IndexPage
