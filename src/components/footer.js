import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from './footer.module.scss'

const Footer = () => {
     const date = new Date()
     const year = date.getFullYear()
     const data = useStaticQuery(graphql`
     query {
          site {
               siteMetadata {
                    author
               }
          }
     }
     `)
     return (
          <footer className={footerStyles.footer}>
               <p>{`Created by ${data.site.siteMetadata.author} © ${year}`}</p>
          </footer>
     )
}

export default Footer