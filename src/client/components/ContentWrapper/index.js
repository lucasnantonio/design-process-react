import React from 'react'
import tachyons from 'tachyons'
import { Post } from '../Post'
import View from './View'

export class ContentWrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bla: "bá",
    }
  }
  render() {
    return (
      <div>
      <View {...this.props}/>
      </div>
    );
  }
}
