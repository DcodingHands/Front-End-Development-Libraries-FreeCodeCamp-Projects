import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
        <Link to ='/autoquote' className="link">Quote</Link>
        <Link to ='/markdown' className="link">Markdown</Link>
    </div>
  )
}

export default Header