import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from 'gatsby';
import BackgroundSection from '../components/Global/BackgroundSection';
import Info from '../components/Home/info';

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="about us" 
    styleClass="about-background"
    />
    <Info/>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default AboutPage;
