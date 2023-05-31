import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Divider, Form, Input } from 'antd'
import { useToggle } from '../hooks'

import { SIGN_IN, SIGN_UP } from '../api'
import { useMutation } from '@apollo/client'
import { LOGINFO } from '../constants'

type LoginType = {
  name?: string
  email: string
  password: string
  confirm?: string
}

const Login: React.FunctionComponent = () => {
  const [form] = Form.useForm()
  const [value, toggle] = useToggle()
  const [signUp] = useMutation(SIGN_UP)
  const [signIn] = useMutation(SIGN_IN)
  const navigate = useNavigate()
  const loggerInfo = value ? LOGINFO.SIGN_UP : LOGINFO.SIGN_IN
  const registerInfo = value ? LOGINFO.CREATE_USER : LOGINFO.ALREADY_SIGNED
  const submitInfo = value ? LOGINFO.SIGN_IN : LOGINFO.SIGN_UP

  const handleLog = () => {
    form.resetFields()
    toggle()
  }

  const onFinish = (values: LoginType) => {
    !value
      ? signUp({
          variables: {
            name: values.name,
            email: values.email,
            password: values.password,
          },
        }).then(() => {
          navigate('/home')
        })
      : signIn({
          variables: {
            email: values.email,
            password: values.password,
          },
        }).then(() => {
          navigate('/home')
        })
  }

  return (
    <Form
      form={form}
      className="w-72"
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        hidden={value}
        name="name"
        rules={[
          {
            required: !value,
            message: 'Нэрээ оруулна уу',
          },
        ]}
        label="Нэр"
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Нэр"
          className="w-full"
          type="text"
          allowClear
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Цахим шуудангаа оруулна уу' }]}
        label="Цахим шуудан"
      >
        <Input
          prefix={<MailOutlined />}
          placeholder="Цахим шуудан"
          className="w-full"
          type="email"
          allowClear
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Нууц үгээ оруулна уу' }]}
        label="Нууц үг"
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Нууц үг"
          allowClear
        />
      </Form.Item>
      <Form.Item
        hidden={value}
        name="confirm"
        label="Нууц үг баталгаажуулах"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: !value,
            message: 'Нууц үгээ баталгаажуулна уу!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(
                new Error('Таны оруулсан нууц үг таарахгүй байна')
              )
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Нууц үг баталгаажуулах"
          allowClear
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="w-full bg-blue-800 text-white">
          {submitInfo}
        </Button>
      </Form.Item>

      <Divider />
      <div className="flex justify-between items-center">
        <span>{registerInfo}</span>
        <Button onClick={handleLog} type="link">
          {loggerInfo}
        </Button>
      </div>
    </Form>
  )
}

export default Login
