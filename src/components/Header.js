import React from 'react'

const Header = (props) => {
  return (
    <header>
        <h1>Header {props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title : 'Default Title'
}

export default Header