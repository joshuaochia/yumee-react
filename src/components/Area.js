import React from 'react'
import classes from './Area.module.css'

const Area = (props) => {

 const placeHolderImage = 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000'
  return (
<div className='col-md-3'>
  <link href="./feature-card1.css" rel="stylesheet" />
    <div className={classes['feature-card1-feature-card']}>
    <h2 className={classes['feature-card1-text']}><span>{props.title}</span></h2>
    <img
      alt="image"
      src={props.img ? props.img : placeHolderImage}
      className={classes["feature-card1-image"] + ' img-fluid my-2'}
    />
  </div>
</div>
  )
}

export default Area