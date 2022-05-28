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
    <Option value="Charlie Chaplin" style={optionStyle}>
      <img src="https://lh3.googleusercontent.com/a/AATXAJwCes3y8ZAHNhBS7J9ftBT_X_PzVdBSxyh3_mlN=s96-c" style={avatarStyle} />
      <span style={nameStyle}>Charlie Chaplin</span>
    </Option>
    <Option value="snow" style={optionStyle}>
      <img src="https://lh3.googleusercontent.com/a/AATXAJz_vJ85-QezW9pzfqQHL7cZEK-HaQyaJsRfwfbp=s96-c" style={avatarStyle} />
      <span style={nameStyle}>Snow, Jon</span>
    </Option>
  </Select>
);

export default AssignToDropdown;
