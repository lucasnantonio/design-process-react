import React from 'react'
import ReactDOM from 'react-dom'
import tachyons from 'tachyons'

import { NavbarItem } from './NavbarItem'

export class Navbar extends React.Component{
  render() {
    return (
      <div>
      <nav
        id="nav"
        className="w-100 flex bg-white fixed pa4 justify-betwen">
        <h1 className="f3 lh-title tl pa0 ma0"> Product<br />Design </h1>
        <ul className="flex w-50 center justify-between list pl0 ml6">
          {this.props.sections.map((item, i) =>
            <NavbarItem
              onClick={this.props.handleClick}
              data-label={this.props.selectedItem}
              label={this.props.sections[i]}
              index={i}
              selectedItem={this.props.selectedItem}
              key={i}/>)}
        </ul>
        <a>About</a>
      </nav>
      <div
        className="bg-red w-100 flex bg-white pa4 justify-betwen">haha</div>
      </div>
    )
  }
}
