import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log('search:', value);
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

const avatarStyle = {
  borderRadius: '50%',
  width: '24px',
  height: '24px',
}

const nameStyle = {
  fontSize: '13px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: '1.54',
  margin: '0 4px 0 8px',
  letterSpacing: '0.23px',
  color: '#384445',
  whiteSpace: 'nowrap',
  textTransform: 'capitalize',
}

const AssignToDropdown = () => (
  <Select
    style={{
      width: '100%'
    }}
    dropdownMatchSelectWidth={false}
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.children).toLowerCase().includes(input.toLowerCase())
    }
  >
    <Option value="ci1" style={optionStyle}>
      <img src="https://lh3.googleusercontent.com/a-/AOh14GhhB2_pbDN0psUf7FBOdBniJ8cimb05oi4Jfbk=s96-c" style={avatarStyle} />
      <span style={nameStyle}>CI1 Hiver</span>
    </Option>
    <Option value="ci2" style={optionStyle}>
      <img src="https://lh3.googleusercontent.com/a-/AOh14GhhB2_pbDN0psUf7FBOdBniJ8cimb05oi4Jfbk=s96-c" style={avatarStyle} />
      <span style={nameStyle}>CI2 Hiver</span>
    </Option>
    <Option value="ci3" style={optionStyle}>
      <img src="https://lh3.googleusercontent.com/a-/AOh14GhhB2_pbDN0psUf7FBOdBniJ8cimb05oi4Jfbk=s96-c" style={avatarStyle} />
      <span style={nameStyle}>CI3 Hiver</span>
    </Option>
  </Select>
);

export default AssignToDropdown;
