import React, { useEffect } from 'react'
import { Button, Drawer, Form, Input } from 'antd'
import { laughing, view } from '../asset'
import { ImageUploadType, Post } from '../types'

type ImageUploaderProps = {
  post: Post
  open: boolean
  onClose: () => void
  onFinish: (values: ImageUploadType) => void
}

const ImageUploader: React.FunctionComponent<ImageUploaderProps> = ({
  post,
  open,
  onClose,
  onFinish,
}) => {
  const [form] = Form.useForm()

  const handleClose = () => {
    onClose()
    form.resetFields()
  }

  const handleFinish = (values: ImageUploadType) => {
    onFinish(post ? { ...values, postid: post.postid } : values)
    handleClose()
  }

  useEffect(() => {
    form.resetFields()
  }, [post])

  const initialValues = React.useMemo(
    () =>
      post
        ? {
            title: post.title,
            description: post.description,
            imageurl: post.imageurl,
            image: post.imageurl,
          }
        : {},
    [post]
  )

  return (
    <>
      <Drawer
        title={post?.postid?.length > 0 ? 'Зураг засах' : 'Зураг нэмэх'}
        width={500}
        onClose={handleClose}
        open={open}
        maskClosable={false}
      >
        <div className="w-full flex justify-center items-center mb-2">
          <img src={laughing} alt="upload" className="w-24 h-24" />
        </div>
        <Form
          autoComplete="off"
          layout="vertical"
          form={form}
          onFinish={handleFinish}
          initialValues={initialValues}
        >
          <Form.Item
            name="title"
            label="Зургийн нэр"
            rules={[{ required: true, message: 'Зургийн нэрээ оруулна уу' }]}
            hasFeedback
          >
            <Input
              placeholder="Зургийн нэрээ оруулна уу"
              showCount
              allowClear
              maxLength={25}
            />
          </Form.Item>
          <Form.Item
            name="description"
            label="Зургийн тайлбар"
            rules={[
              { required: true, message: 'Зургийн тайлбараа оруулна уу' },
            ]}
            hasFeedback
          >
            <Input
              placeholder="Зургийн тайлбараа оруулна уу"
              showCount
              allowClear
              maxLength={120}
            />
          </Form.Item>
          <Form.Item
            name="imageurl"
            label="Зургийн хаягаа оруулах"
            hasFeedback
            required
            rules={[
              {
                validator: (_, v) => {
                  if (!v) {
                    return Promise.reject('Зургийн хаягаа оруулна уу')
                  }
                  return Promise.resolve()
                },
              },
            ]}
          >
            <Input allowClear placeholder="Зургийн хаягаа оруулна уу" />
          </Form.Item>

          <Form.Item name="image">
            <img
              src={post?.imageurl ?? view}
              alt="image"
              className="w-full h-80 object-cover rounded-lg"
            />
          </Form.Item>

          <Form.Item>
            <Button
              className="w-full bg-blue-800"
              type="primary"
              htmlType="submit"
            >
              {post?.postid?.length > 0 ? 'Засах' : 'Нэмэх'}
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  )
}

export default ImageUploader
