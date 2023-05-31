import React from 'react'
import { Header, ImageUploader, NewsFeed } from '../components'
import { Button, Space, message } from 'antd'
import { CloudUploadOutlined } from '@ant-design/icons'
import { useToggle } from '../hooks'
import { useMutation, useQuery } from '@apollo/client'
import { ImageUploadType, Post } from '../types'
import {
  DELETE_POST_BY_ID,
  GET_ALL_POSTS,
  GET_POST_BY_ID,
  UPDATE_IMAGE,
  UPLOAD_IMAGE,
} from '../api'

const Home: React.FunctionComponent = () => {
  const [postid, setPostid] = React.useState<string>('')
  const [value, , setValue] = useToggle(false)
  const { data, refetch } = useQuery(GET_ALL_POSTS)
  const { data: getPostData } = useQuery(GET_POST_BY_ID, {
    variables: { postid },
    skip: !postid,
  })
  const [uploadImage] = useMutation(UPLOAD_IMAGE)
  const [updateImage] = useMutation(UPDATE_IMAGE)
  const [deletePost] = useMutation(DELETE_POST_BY_ID)

  const allPost: Post[] = React.useMemo(() => {
    return data?.getAllPost ?? []
  }, [data])

  const post: Post = React.useMemo(() => {
    return getPostData?.getPostByPostId ?? {}
  }, [getPostData])

  const showDrawer = React.useCallback(() => {
    setValue(true)
  }, [setValue])

  const onClose = React.useCallback(() => {
    setValue(false)
    setPostid('')
  }, [setValue])

  const handleFinish = React.useCallback(
    async (values: ImageUploadType) => {
      try {
        const { title, description, imageurl } = values
        if (post && values.postid) {
          await updateImage({
            variables: {
              postid: values.postid,
              title: values.title,
              description: values.description,
              imageurl: values.imageurl,
            },
          })
        } else {
          await uploadImage({
            variables: {
              userid: '19',
              title,
              description,
              imageurl,
            },
          })
        }
        refetch()
        message.success({ type: 'success', content: 'Амжилттай' })
      } catch (error) {
        message.error({ type: 'error', content: 'Алдаа гарлаа' })
      }
    },
    [post, refetch, updateImage, uploadImage]
  )

  const handleDelete = React.useCallback(
    (id: string) => {
      deletePost({
        variables: {
          postid: id,
        },
      }).then(() => refetch())
    },
    [deletePost, refetch]
  )

  const handleEdit = React.useCallback(
    (id: string) => {
      setValue(true)
      setPostid(id)
    },
    [setValue]
  )

  return (
    <div>
      <Header>
        <Space>
          <Button
            icon={<CloudUploadOutlined />}
            onClick={showDrawer}
            type="dashed"
          >
            Зураг нэмэх
          </Button>
        </Space>
      </Header>
      <ImageUploader
        open={value}
        post={post}
        onFinish={handleFinish}
        onClose={onClose}
      />
      <NewsFeed allPost={allPost} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  )
}

export default Home
