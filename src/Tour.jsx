import React, { useState } from 'react'

const Tour = ({id,image,info,name,price,removeTour}) => {

  const [showMore, setShowMore] = useState(false)
  return (
    <div className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'> ${price}</span>

      <div className="tour-info">
        <h4>{name}</h4>
        <p>{showMore?info : `${info.substring(0,250)}..........`}
          <button className='info-btn' onClick={()=>setShowMore(!showMore)}>{showMore?'show Less': 'Read more'}</button>
        </p>

      <button className='delete-btn btn' onClick={()=>removeTour(id)}>Remove</button>
      </div>
      
    </div>
  )
}

export default Tour;
