import React from 'react'

const Header = (props) => {
  return (
    <div>Header {props.title}</div>
  )
}

Header.defaultProps = {
  title : 'Default Title'
}

export default Header