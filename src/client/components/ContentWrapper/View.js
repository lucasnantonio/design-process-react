import React from 'react'
import { Post } from '../Post'

const View = (props) => {
  const posts = props.renderedPosts.map((item, i) => <Post title={item.title} body={item.body} key={i} />)
  const content = !props.isLoadingPosts ? (posts) : <p>loading</p>
  return(
    <div className="w-100 pt6 vh-100 flex flex-column overflow-hidden bg-near-white">
      <div className="flex w-50 center flex-column">
        <h2 className='f2 b'>{props.selectedItem}</h2>
          {content}
      </div>
    </div>
  )}


export default View;
