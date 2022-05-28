import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const optionStyle = {
  fontSize: '13px',
  lineHeight: '1.54',
  letterSpacing: '0.23px',
  display: 'flex',
  height: '40px',
  paddingLeft: '16px',
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer',
}

const StatusDropdown = () => (
  <Select
    style={{
      width: '80%',
      backgroundColor: '#ffbc3b',
    }}
    defaultValue='open'
    dropdownMatchSelectWidth={false}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
  >
    <Option value="open" style={optionStyle}>
      Open
    </Option>
    <Option value="pending">Pending</Option>
    <Option value="closed">Closed</Option>
  </Select>
);

export default StatusDropdown;
