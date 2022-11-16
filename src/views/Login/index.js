import React, { useState } from 'react'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import { Button, Checkbox, Form, Input } from 'antd'

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 24,
      offset: 0,
    },
  },
}

const LoginPage = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div className="login-page">
      <div className="login-page_header">
        <h1>Welcome back</h1>
        <p>Login to your account</p>
      </div>

      <div>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          layout="vertical"
          requiredMark="optional"
          className="login-page_form"
        >
          <div className="form_header">
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                  whitespace: true,
                },
              ]}
              className="login-page_form_item"
              style={{
                marginBottom: '28px',
              }}
            >
              <Input placeholder="Username" className="login-page_form_item_input" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              className="login-page_form_item"
              // hasFeedback
            >
              <Input.Password
                placeholder="A confirmation code will be sent to this address"
                className="login-page_form_item_input"
              />
            </Form.Item>
          </div>

          <Form.Item
            // style={{marginLeft: '-50%'}}

            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
            {...tailFormItemLayout}
            style={{ marginBottom: '32px' }}
          >
            <Checkbox style={{ fontSize: '14px', fontWeight: 400 }}>Remember & Auto Login</Checkbox>
          </Form.Item>

          <Form.Item {...tailFormItemLayout} style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit" className="btn_login">
              Login
            </Button>
            <div className="question">
              <p>
                Don't have an account?{' '}
                <span>
                  <a href="#">Click to sign up</a>
                </span>{' '}
              </p>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

LoginPage.Layout = PublicLayoutBlock
export default LoginPage
