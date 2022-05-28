import React from 'react'
import { Row, Col } from 'antd'
import AssignToDropdown from './AssignToDropdown'
import StatusDropdown from './StatusDropdown'


const labelStyle = {
  opacity: '0.4',
  paddingBottom: '6px',

  fontFamily: "'DM Sans', Roboto, Arial, Helvetica, sans-serif",
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '1.33',
  letterSpacing: '0.3px',
  color: '#323c3d',
};

const RightPanel = () => (
  <div style={{ width: '20%', borderLeft: 'solid 1px rgb(216, 216, 216,0.5)', zIndex: '2', width: '262px', height: '100%', position: 'absolute', right: '0' }}>
    <div className='header' style={{ padding: '15px 2px 16px 14px', backgroundColor: '#ffffff', display: 'flex', justifyContent: 'space-between' }}>
      <img src='sm-icon.png' style={{ width: '20px', height: '20px' }} />
      <span className='Title'
        style={{
          opacity: '0.85',
          fontFamily: "'DM Sans', Roboto, Arial, Helvetica, sans-serif",
          fontSize: "13px",
          fontWeight: '500',
          lineHeight: '1.71',
          letterSpacing: '0.1px',
          color: '#323c3d',
          alignItems: 'center',
          margin: '0 6px 0 9px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          cursor: 'default',
        }}
      >Aniket Support Testing</span>
      <img src='menu-vertical.png' style={{ width: '20px', height: '20px' }} />
    </div>

    <div>
    <Row align='middle' justify='space-between' style={{ padding: '10px' }}>
      <Col span={12}>
        <Row><Col span={24} style={labelStyle}>Assigned to</Col></Row>
        <Row><Col span={24}><AssignToDropdown /></Col></Row>
      </Col>
      <Col span={12}>
        <Row><Col span={24} style={labelStyle}>Status</Col></Row>
        <Row><Col span={24}><StatusDropdown /></Col></Row>
      </Col>
    </Row>
    </div>

    <div>
      <img src='tags.png' style={{ width: '100%', height: '100%' }} />
    </div>
    <div>
      <img src='notes.png' style={{ width: '100%', height: '100%' }} />
    </div>

  </div>
)

export default RightPanel
