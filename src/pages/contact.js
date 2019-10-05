import React from 'react'
import Head from '../components/head'

import Layout from '../components/layout'

const ContactPage = () => {

     return (
          <Layout>
               <Head title="Contact" />
               <h1>Contact me</h1>
               <p>email: <a href="mailto:contact@jlhernando.com">contact@jlhernando.com</a></p>
               <p>phone: 07000000000</p>
               <p>Find me on <a href="https://twitter.com/jlhernando">@jlhernando</a></p>
          </Layout>
     )
}

export default ContactPage