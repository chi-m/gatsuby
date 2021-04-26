import React from "react"
import { graphql } from "gatsby"

const About = ({ data }) => {
  // propsの中のdataだけDestructuring(分割代入)
  // console.log(data)
  return (
    <div>
      <h2>{data.site.siteMetadata.title}</h2>
      <h1>About page</h1>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default About