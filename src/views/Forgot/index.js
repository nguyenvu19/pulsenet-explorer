import React from 'react'
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

const Forgot = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div className="forgot-page">
      <div className="forgot-page_header">
        <h1>Forgot your password?</h1>
        <p>Enter your email address below and we'll get you back on track.</p>
      </div>
      <div className="forgot-page_content">
        <Form
          {...formItemLayout}
          form={form}
          name="forgot"
          onFinish={onFinish}
          scrollToFirstError
          layout="vertical"
          requiredMark="optional"
          className="forgot-page_form"
        >
          <div className="forgot_header">
           
            <Form.Item
              name="EmailAddress"
              label="Email Address"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                  whitespace: true,
                },
              ]}
              className="forgot-page_form_item"
              // style={{
              //   width: '500px',
              // }}
            >
              <Input
                placeholder="A confirmation code will be sent to this address"
                className="forgot-page_form_item_input"
              />
            </Form.Item>

          </div>
          
              {/* btn-register */}
          <div>
            <Form.Item {...tailFormItemLayout} style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit" className="btn_forgot">
                Reset Password
              </Button>
              <div className="question">
                <p>
                
                    <a href="#">Back to sign in</a>
                 
                </p>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}

Forgot.Layout = PublicLayoutBlock
export default Forgot
