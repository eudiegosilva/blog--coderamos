/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Pagination from '../components/pagination'
import PostItem from '../components/postItem'
import SEO from '../components/seo'

import * as s from '../components/list/styles'

export const query = graphql`
  query PostList($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            postURL
          }
          frontmatter {
            tagColor
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`

const BlogPost = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="home" />
      <s.ListContainer>
        {postList.map(
          (
            {
              node: {
                fields: { postURL },
                frontmatter: { tagColor, category, date, description, title },
                timeToRead,
              },
            },
            index
          ) => (
            <PostItem
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              postURL={postURL}
              tagColor={tagColor}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
            />
          )
        )}
      </s.ListContainer>

      <Pagination
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export default BlogPost
