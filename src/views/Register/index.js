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

const Register = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div className="register-page">
      <div className="register-page_header">
        <h1>Register a New Account</h1>
        <p>Fill out the form to get started.</p>
      </div>
      <div className="register-page_content">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          layout="vertical"
          requiredMark="optional"
          className="register-page_form"
        >
          <div className="register_header">
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
              className="register-page_form_item"
              // style={{
              //   width: '500px',
              // }}
            >
              <Input
                placeholder="Username has to be from 5 to 30 characters in length, only alphanumeric characters allowed."
                className="register-page_form_item_input"
              />
            </Form.Item>
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
              className="register-page_form_item"
              // style={{
              //   width: '500px',
              // }}
            >
              <Input
                placeholder="A confirmation code will be sent to this address"
                className="register-page_form_item_input"
              />
            </Form.Item>
            <Form.Item
              name="Confirm Email Address"
              label="Confirm Email Address"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                  whitespace: true,
                },
              ]}
              className="register-page_form_item"
              // style={{
              //   width: '500px',
              // }}
            >
              <Input placeholder="Re-enter your email address" className="register-page_form_item_input" />
            </Form.Item>
            <div className='form_header_content'>
              <Form.Item
                name="Password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                    whitespace: true,
                  },
                ]}
                className="register-page_form_item"
               
              >
                {/* <br/> */}
                <Input type='password' className="register-page_form_item_input" />
              </Form.Item>
              <Form.Item
                name="Confirm Password"
                label="Confirm Password"
                
                rules={[
                  {
                    required: true,
                    message: 'Confirm Password!',
                    whitespace: true,
                  },
                ]}
                className="register-page_form_item"
                
              >
                <Input type='password' className="register-page_form_item_input" />
              </Form.Item>
            </div>
          </div>
                {/* checked */}
          <div className='register_checked'>
            <Form.Item
              // style={{marginLeft: '-50%'}}

              name="agree"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                },
              ]}
              {...tailFormItemLayout}
              style={{marginBottom:'19px'}}
            >
              <Checkbox style={{fontSize: '14px', fontWeight: 400}}>I agree to the Terms and Conditions</Checkbox>
            </Form.Item>
            
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
            >
              <Checkbox style={{fontSize: '14px', fontWeight: 400}}>I agree to receive the Etherscan newsletter and understand that I can unsubscribe at any time.</Checkbox>
            </Form.Item>

          </div>
              {/* btn-register */}
          <div>
            <Form.Item {...tailFormItemLayout} style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit" className="btn_register">
                Create an Account
              </Button>
              <div className="question">
                <p>
                  Already have an account?
                  <span>
                    <a href="#">Click to sign in</a>
                  </span>
                </p>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}

Register.Layout = PublicLayoutBlock
export default Register
