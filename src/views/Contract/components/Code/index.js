import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'

import { render } from 'react-dom'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/ext-language_tools'

import { dataCode } from './dataCode'
import { securityCode } from './securityCode'
import { auditCode } from './auditCode'

const items = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },

  {
    label: '3rd menu item',
    key: '3',
  },
]

const ContractCode = () => {
  return (
    <div className="contract-code">
      <div className="code-top">
        <div className="top">
          <div className="left">
            <img src="/images/icon/down-circle.png" alt="" />

            <p>
              Contract Source Code Verified <span>(Exact Match)</span>
            </p>
          </div>
          <div className="right">
            <img src="/images/icon/danger.png" alt="" />
          </div>
        </div>

        <div className="down">
          <div className="contract">
            <div className="left">
              <p>Contract Name:</p>
              <span>TetherToken</span>
            </div>

            <div className="right">
              <p>Optimization Enabled:</p>
              <span>No</span>&nbsp;
              <span>with</span>&nbsp;
              <span>0</span>&nbsp;
              <span>runs</span>
            </div>
          </div>

          <div className="compiler">
            <div className="left">
              <p>Compiler Version</p>
              <span>v0.4.18+commit.9cf6e910</span>
            </div>

            <div className="right">
              <p>Other Settings:</p>
              <span>default</span>&nbsp;
              <span>evmVersion</span>
            </div>
          </div>
        </div>
      </div>

      <div className="code-down">
        <div className="solidity">
          <div className="head">
            <div className="left">
              <img src="/images/icon/folder-2.png" alt="" />
              <p>
                Contract Source Code <span>(Solidity)</span>
              </p>
            </div>

            <div className="right">
              <div className="top">
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={['click']}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Outline
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>

                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={['click']}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      More Options
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>

              <div className="down">
                <img src="/images/icon/link-2.png" alt="" />
                <img src="/images/icon/document-copy.png" alt="" />
                <img src="/images/icon/money-4.png" alt="" />
              </div>
            </div>
          </div>

          <div className="content">
            <AceEditor
              placeholder="Placeholder Text"
              mode="java"
              theme="kuroir"
              name="blah2"
              fontSize={12}
              showGutter={true}
              highlightActiveLine={true}
              value={dataCode}
              readOnly={true}
              setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 10,
              }}
              width="100%"
              height="550px"
              showPrintMargin={false}
            />
          </div>
        </div>

        <div className="security">
          <div className="head">
            <div className="head-1">
              <img src="/images/icon/document-text.png" alt="" />
              <p>Contract Security Audit</p>
            </div>

            <div className="head-2">
              <img src="/images/icon/Ellipse 1108.png" alt="" />
              <button>No Contract Security Audit Submitted</button>
              <p>- Submit Audit Here</p>
            </div>

            <div className="head-3">
              <div className="left">
                <img src="/images/icon/task.png" alt="" />
                <p>Contract Security Audit</p>
              </div>
              <div className="right">
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={['click']}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Export ABI
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
                <img src="/images/icon/document-copy.png" alt="" />
                <img src="/images/icon/money-4.png" alt="" />
              </div>
            </div>
          </div>

          <div className="content">
            <AceEditor
              placeholder="Placeholder Text"
              mode="json"
              theme="kuroir"
              name="blah2"
              fontSize={12}
              showGutter={false}
              highlightActiveLine={true}
              value={securityCode}
              readOnly={true}
              setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: false,
                tabSize: 10,
              }}
              width="100%"
              height="300px"
              showPrintMargin={false}
            />
          </div>
        </div>

        <div className="audit">
          <div className="head">
            <div className="left">
              <img src="/images/icon/left-right.png" />
              <p>Contract Security Audit</p>
            </div>
            <div className="right">
              <button>
                Decompile Byte code&nbsp;&nbsp;
                <img src="/images/account/add.png" />
              </button>
              <button>Switch to Opcodes View</button>
            </div>
          </div>

          <div className="content">
            <AceEditor
              placeholder="Placeholder Text"
              mode="json"
              theme="kuroir"
              name="blah2"
              fontSize={12}
              showGutter={false}
              highlightActiveLine={true}
              value={auditCode}
              readOnly={true}
              setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: false,
                tabSize: 10,
              }}
              width="100%"
              height="300px"
              showPrintMargin={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContractCode
