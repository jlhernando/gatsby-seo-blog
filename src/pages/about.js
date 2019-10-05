import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'

import Layout from '../components/layout'

const AboutPage = () => {
     return (
          <Layout>
          <Head title="About us" />
               <h1>About me</h1>
               <p>This section talks about me and the things I like.</p>
               <p>If you need an seo <Link to="/contact">Contact me!</Link></p>
          </Layout>

     )
}

export default AboutPage