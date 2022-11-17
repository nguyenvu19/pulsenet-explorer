import React from 'react'
import { Checkbox, Button, Form, Input, Select } from 'antd'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'

const { Option } = Select
const layout = {
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
const tailLayout = {
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

const VerifyPage = () => {
  const [form] = Form.useForm()
  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        })
        return
      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        })
        return
      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        })
    }
  }
  const onFinish = (values) => {
    console.log(values)
  }
  const onReset = () => {
    form.resetFields()
  }
  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    })
  }

  return (
    <div className="verify">
      <div className="verify_top">
        <h1>Verify & Publish Contract Source Code</h1>
        <p>COMPILER TYPE AND VERSION SELECTION</p>
      </div>
      <div className="verify_bot">
        <div className="left">
          <img src="/images/verify/verify.png" alt="" />
        </div>
        <div className="right">
          <div className="text-verify">
            <p>
              Source code verification provides <span className="bold">transparency</span> for users interacting with
              smart contracts. By uploading the source code, Etherscan will match the compiled code with that on the
              blockchain. Just like contracts, a "smart contract" should provide end users with more information on what
              they are "digitally signing" for and give users an opportunity to audit the code to independently verify
              that it actually does what it is supposed to do.
            </p>
            <p>
              Please be informed that advanced settings (e.g. bytecodeHash: "none" or viaIR: "true") can be accessed via
              Solidity (Standard-Json-Input) verification method. More information can be found under Solidity's
              "Compiler Input and Output JSON Description" documentation section.
            </p>
          </div>
          <div className="input-verify">
            

            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
              <Form.Item
                name="Compiler type"
                label="Please select Compiler Type"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="Contract Address"
                label="Please enter the Contract Address you would like to verify"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select placeholder="[please slect]" onChange={onGenderChange} allowClear>
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="License Type"
                label="Please select Open Source License Type"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select placeholder="[please slect]" onChange={onGenderChange} allowClear>
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>

              {/* <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
              >
                {({ getFieldValue }) =>
                  getFieldValue('gender') === 'other' ? (
                    <Form.Item
                      name="customizeGender"
                      label="Customize Gender"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  ) : null
                }
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                  Reset
                </Button>
                <Button type="link" htmlType="button" onClick={onFill}>
                  Fill form
                </Button>
              </Form.Item> */}

              <div className="checkBox">
                <Checkbox />
                <span>
                  i agree to the <span className="textGreen">terms of service</span>
                </span>
              </div>
              <div className="button-container">
              <Button className="green" type="primary" htmlType="submit">
                Submit
              </Button>
              <Button className="white" htmlType="button" onClick={onReset}>
                Reset
              </Button>
              </div>
            </Form>
          </div>
          
        </div>
      </div>
    </div>
  )
}
VerifyPage.Layout = PublicLayoutBlock
export default VerifyPage
