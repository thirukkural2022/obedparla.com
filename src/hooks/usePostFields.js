import React from 'react';

export const usePostFields = postEdges =>
  React.useMemo(() => {
    const postList = [];
    if (postEdges) {
      postEdges.forEach(postEdge => {
        postList.push({
          path: postEdge.node.fields.slug,
          tags: postEdge.node.frontmatter.tags,
          cover: postEdge.node.frontmatter.cover,
          title: postEdge.node.frontmatter.title,
          date: postEdge.node.fields.date,
          excerpt: postEdge.node.excerpt,
          timeToRead: postEdge.node.timeToRead,
          categories: postEdge.node.frontmatter.categories,
        });
      });
    }

    return postList;
  }, [postEdges]);
