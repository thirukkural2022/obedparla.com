/* eslint "no-console": "off" */

const path = require('path');
const _ = require('lodash');
const moment = require('moment');
const siteConfig = require('./data/SiteConfig');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      if (
        node.frontmatter.categories &&
        node.frontmatter.categories.length > 0
      ) {
        slug = `/${node.frontmatter.categories[0]}/${_.kebabCase(
          node.frontmatter.title,
        )}/`;
      } else {
        slug = `/${_.kebabCase(node.frontmatter.title)}/`;
      }
    }

    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug'))
        slug = `/${_.kebabCase(node.frontmatter.slug)}/`;

      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'date')) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);

        createNodeField({
          node,
          name: 'fancyDate',
          value: moment(date, siteConfig.dateFromFormat).format(
            siteConfig.dateFancyFormat,
          ),
        });

        createNodeField({
          node,
          name: 'fileName',
          value: parsedFilePath.name,
        });

        createNodeField({ node, name: 'date', value: date.toISOString() });
      }
    }
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postPage = path.resolve('src/templates/post.jsx');
  const tagPage = path.resolve('src/templates/tag.jsx');
  const categoryPage = path.resolve('src/templates/category.jsx');
  // Get a full list of markdown posts
  const markdownQueryResult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              categories
              date
            }
          }
        }
      }
    }
  `);

  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors);
    throw markdownQueryResult.errors;
  }

  const tagSet = new Set();
  const categorySet = new Set();

  const postsEdges = markdownQueryResult.data.allMarkdownRemark.edges;

  // Sort posts
  postsEdges.sort((postA, postB) => {
    const dateA = moment(
      postA.node.frontmatter.date,
      siteConfig.dateFromFormat,
    );

    const dateB = moment(
      postB.node.frontmatter.date,
      siteConfig.dateFromFormat,
    );

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;

    return 0;
  });

  // Post page creating
  postsEdges.forEach((edge, index) => {
    // Generate a list of tags
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach(tag => {
        tagSet.add(tag);
      });
    }

    // Create post pages
    const nextID = index + 1 < postsEdges.length ? index + 1 : 0;
    const prevID = index - 1 >= 0 ? index - 1 : postsEdges.length - 1;
    const nextEdge = postsEdges[nextID];
    const prevEdge = postsEdges[prevID];
    const postsSlug = edge.node.fields.slug;

    // Generate a list of categories
    if (edge.node.frontmatter.categories.length > 0) {
      edge.node.frontmatter.categories.forEach(category => {
        categorySet.add(category);
      });
    }

    createPage({
      path: postsSlug,
      component: postPage,
      context: {
        slug: postsSlug,
        nexttitle: nextEdge.node.frontmatter.title,
        nextslug: nextEdge.node.fields.slug,
        prevtitle: prevEdge.node.frontmatter.title,
        prevslug: prevEdge.node.fields.slug,
      },
    });
  });

  //  Create tag pages
  tagSet.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagPage,
      context: { tag },
    });
  });

  // Create category pages
  categorySet.forEach(category => {
    createPage({
      path: `/${_.kebabCase(category)}/`,
      component: categoryPage,
      context: { category },
    });
  });
};
