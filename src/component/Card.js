import React from 'react'

const Card = ({pang, scrollToTop})=>{
  return(
    <div className="eachCard Product" onClick={()=>{scrollToTop();}}>
      <div className="photo">
        <img src={process.env.PUBLIC_URL + pang.image} />
      </div>
      <p className='minidesc'>{pang.title}</p>
      <p className='minidesc'>{pang.price.toLocaleString('ko-KR')}원</p>
    </div>
  )
}
export default Card;