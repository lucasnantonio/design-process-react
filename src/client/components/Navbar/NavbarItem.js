import React from 'react'
import ReactDOM from 'react-dom'
import tachyons from 'tachyons'
import classNames from 'classnames'


export class NavbarItem extends React.Component {

  render(){
    const cx = classNames(
      this.props.selectedItem == this.props.label ? 'black' : 'black-30',
      'pointer mr4'
    )
    return (
          <li className={cx} onClick={this.props.onClick}>
            {this.props.label}
          </li>
    );
  }
}
