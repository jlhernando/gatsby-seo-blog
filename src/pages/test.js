import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Head from '../components/head'

const TestPage = () => {
     return (
          <Layout>
          <Head title="Test Page" />
               <h1>What up!!</h1>
               <p>Need an SEO <Link to="/contact">Contact me.</Link></p>
          </Layout>
     )
}

export default TestPage
