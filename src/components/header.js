import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
// import './header.module.scss'
import headerStyles from './header.module.scss'
import logo from '../../static/react.png'

const MainHeader = () => {
     const data = useStaticQuery(graphql`
     query {
          site {
               siteMetadata {
                    title
               }
          }
     }
     `)
     return (
          <header className={headerStyles.header}>
               <div class="top">
                    <img class="logo"></img>
                    <h1>
                         <Link className={headerStyles.title} to="/">
                         {data.site.siteMetadata.title}
                         </Link>
                    </h1>
               </div>
               <nav>
                    <ul className={headerStyles.navList}>
                         <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                         <li><Link  className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
                         <li><Link  className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About me</Link></li>
                         <li><Link  className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
                    </ul>
               </nav>
          </header>
     )
}
export default MainHeader