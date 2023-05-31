import { gql } from '@apollo/client'

export const SIGN_UP = gql`
  mutation ($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      success
      message
    }
  }
`

export const SIGN_IN = gql`
  mutation ($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      success
      message
    }
  }
`

export const UPLOAD_IMAGE = gql`
  mutation (
    $userid: ID!
    $title: String!
    $imageurl: String!
    $description: String!
  ) {
    createPost(
      userid: $userid
      title: $title
      imageurl: $imageurl
      description: $description
    ) {
      success
      message
    }
  }
`

export const UPDATE_IMAGE = gql`
  mutation (
    $postid: ID!
    $title: String!
    $imageurl: String!
    $description: String!
  ) {
    updatePostById(
      postid: $postid
      title: $title
      imageurl: $imageurl
      description: $description
    ) {
      success
      message
    }
  }
`

export const DELETE_POST_BY_ID = gql`
  mutation ($postid: ID!) {
    deletePostById(postid: $postid)
  }
`
