import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query {
    users {
      email
      name
    }
  }
`

export const GET_USER_BY_ID = gql`
  query ($getUserByIdId: ID!) {
    getUserById(id: $getUserByIdId) {
      name
      email
      id
    }
  }
`

export const GET_ALL_POSTS = gql`
  query {
    getAllPost {
      userid
      postid
      title
      description
      imageurl
    }
  }
`

export const GET_POST_BY_ID = gql`
  query ($postid: ID!) {
    getPostByPostId(postid: $postid) {
      title
      description
      imageurl
      postid
      userid
    }
  }
`
