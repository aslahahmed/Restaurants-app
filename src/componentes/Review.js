import React from 'react'

function Review({data}) {
  return (
    <div>
       <h3 style={{textAlign:'center'}}>REVIEWS</h3>
        {data.map((item) => (
            <div>
               <i><h5>{item.name} , <span>{item.date}</span> </h5></i>
                <p>{item.comments}</p>
            </div>
        ))}
      
    </div>
  )
}

export default Review
