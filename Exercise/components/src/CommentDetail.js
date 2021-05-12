import React from 'react'
import faker from 'faker'

export default function CommentDetail(props) {
    const{name, date, comment}= props
    return (
        <div className='comment'>
        <a href='/' className='avatar'>
        <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            {name}
          </a>
          <div className='metadata'>
            <span className='date'>{date}</span>
          </div>
          <div className='text'>{comment}</div>
        </div>
      </div>
    )
}
