import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const notFound = () => {
      return (
           <Layout>
               <h1>Page not found</h1>
               <p>Go back to the <Link to="/" >Home page</Link></p>
           </Layout>

      )
}

export default notFound