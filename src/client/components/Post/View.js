import React from 'react'
import tachyons from 'tachyons'
import classNames from 'classnames'

const View = (props) => {
    return(
      <div className='w-100 bg-white pa4'>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </div>
    )
}

export default View;
