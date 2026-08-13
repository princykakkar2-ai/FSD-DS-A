import React from 'react'
import './Header.css'
import LazyText from './Lazytext';

const Header = () => {
  return (
    <div className="heading">
      <div className="title">
        <h2>Welcome <span>to</span> Nightescape</h2>
      </div>
      <LazyText threshold={0.2}>
      <div className="sub-title">
        <p>Hotel for crashing, bar for confessing, club for forgetting.</p>
        <p>
        Step right in—your morning-after regret is already on the menu.
        </p>
      </div>
      </LazyText>
    </div>
  )
}

export default Header