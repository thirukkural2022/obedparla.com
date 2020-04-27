import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../layout/Layout';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import { PostInfo } from '../components/PostInfo';
import { NewsletterIframe } from '../components/NewsletterIframe';
import { Article } from './styles';
import { SpacingContainer } from '../components/styles';

const PostTemplate = props => {
  const { data, pageContext } = props;
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  const { fancyDate, fileName } = postNode.fields;
  const githubLink = `${config.repo}/blob/master/content/posts/${fileName}.md`;

  return (
    <Layout>
      <Helmet
        title={`${post.title} | ${config.siteTitle}`}
        description={postNode.excerpt}
      />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Article>
        {post.cover && <Img fluid={post.cover.childImageSharp.fluid} />}

        <SpacingContainer as='h1' marginBottom={0}>
          {post.title}
        </SpacingContainer>

        <SpacingContainer marginBottom='40px'>
          <PostInfo timeToRead={postNode.timeToRead} />
          <small>
            {' - '}
            {post.categories.map((category, index) => (
              <React.Fragment key={category}>
                <Link to={`/${category}/`}>{category}</Link>
                {index < post.categories.length - 1 && ', '}
              </React.Fragment>
            ))}
            {' - '}
            <a href={githubLink}>Edit on Github</a>
          </small>
        </SpacingContainer>
        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        <hr />
        <em>Last updated: {fancyDate}</em>

        <NewsletterIframe margin={'0 0 1.4rem'} />

        <div className='post-meta'>
          <SocialLinks postPath={slug} postNode={postNode} />
        </div>
      </Article>
    </Layout>
  );
};

export default PostTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        categories
        cover {
          childImageSharp {
            fluid(maxWidth: 600, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
        fancyDate
        fileName
      }
    }
  }
`;
