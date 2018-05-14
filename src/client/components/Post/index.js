import React from 'react'
import View from './View'

export class Post extends React.Component{
  render(){
    return(
      < View {...this.props}/>
    )
  }
}
