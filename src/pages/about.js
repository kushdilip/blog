import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const { social } = data.site.siteMetadata

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About | Dilip's Blog" />
        <p>
        Hello! This is me, Dilip Kushwaha. I am Full Stack Developer based in Bangalore, IN.
        </p>
        <p>
        I love to do experiments with Web technologies. I have expertise in building ambitious apps with Ember.js. I am quite comfortable with Node & Express as well. Previouly I have worked on technologies like .NET, Android & Angular.js.
        </p>

        <p>
          <a href={`https://twitter.com/${social.twitter}`}>
            You can follow me on Twitter
          </a>
        </p>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }
  }
`
