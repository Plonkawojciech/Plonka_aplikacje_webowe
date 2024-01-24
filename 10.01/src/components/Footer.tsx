import React from 'react'

const Footer = () => {
  const year = new Date().toLocaleDateString().slice(6, 10)
  return <div>&copy; Wojciech Płonka {year}</div>
}

export default Footer
