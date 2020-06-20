import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from 'gatsby';
import BackgroundSection from '../components/Global/BackgroundSection';
import Info from '../components/Home/info';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="Regular Ind's" 
    styleClass="default-background"
    />
    <Info/>
  </Layout>
)

export const query=graphql`
{
  img:file(relativePath:{eq:"default-background.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`;

export default IndexPage
