import React from 'react';

const Header = (props) => {
  const { title } = props;
  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  return <h1 style={headerStyle}>{title}</h1>;
};

export default Header;