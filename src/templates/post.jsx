import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import Layout from '../layout/Layout';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import './b16-tomorrow-dark.css';
import { PostInfo } from '../components/PostInfo';

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Article>
          {post.cover && <Img fluid={post.cover.childImageSharp.fluid} />}

          <h1 css={{ marginBottom: 0 }}>{post.title}</h1>

          <div css={{ marginBottom: '40px' }}>
            <PostInfo
              date={postNode.fields.date}
              timeToRead={postNode.timeToRead}
            />
            {' - '}
            <small>
              {post.categories.map((category, index) => (
                <>
                  <Link to={`/${category}`} css={{}}>
                    {category}
                  </Link>
                  {index < post.categories.length - 1 && ', '}
                </>
              ))}
            </small>
          </div>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div className='post-meta'>
            <SocialLinks postPath={slug} postNode={postNode} />
          </div>
        </Article>
      </Layout>
    );
  }
}

const Article = styled.article`
  .gatsby-image-wrapper {
    @media (${({ theme }) => theme.media.mobile}) {
      img {
        border-radius: 0;
      }
    }
  }
`;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        categories
        cover {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
        date
      }
    }
  }
`;
