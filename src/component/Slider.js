import React from 'react';
import {useRef, useState, useEffect} from 'react';

import data2 from './../data2';



// {dataSlider, slideRef, slideCount, setSlideCount, handleSlider }
function Slider(){
  
  //캐로셀
  let slideRef = useRef();
  let [dataSlider, setDataSlider] = useState(data2);
  let [slideCount, setSlideCount] = useState(1)

  const handleSlider = slideCount =>{
    if(slideCount === 4){
      slideRef.current.style.transform = 'translateX(0)';
    }else{
      slideRef.current.style.transform = `translateX( -${25 * slideCount}%)`;
    }
  };

  const interval = ()=> {
    setTimeout(()=>{
      setSlideCount(()=>{
        if(slideCount < dataSlider.length){
          setSlideCount(slideCount + 1);
        }else{
          setSlideCount(1);
        }
      });
      handleSlider(slideCount); 
  }, 4000)};


  useEffect(()=>{
    //캐로셀 4초마다 동작
    interval()
    //클리어
    return()=> {
      clearTimeout(interval);
    } 
  },[slideCount]);

  useEffect(()=>{
    window.addEventListener('resize', handleSlider())
  })


  return(
    <div className="sliderOuter">
      <ul className="sliderContainer" ref={slideRef}>
        {
          dataSlider.map((a, i)=>{
            return(
              <li className="slide" key={i}>
                <img src={ process.env.PUBLIC_URL + `/rolloutPc${i + 1}.png`} className="optimDesk"/>
                <img src={ process.env.PUBLIC_URL + `/rollout${i + 1}.png`} className="optimTablet"/>
                <img src={ process.env.PUBLIC_URL + `/rolloutPhone${i + 1}.png` } className="optimPhone"/>
              </li>
            )
          })
        }
      </ul>
      <div className="buttonContainer">
        {
          dataSlider.map((a, i)=>{
            return(
              <button key={i} onClick={()=>{
                handleSlider(i);
                setSlideCount(i + 1)
             }}
              className={ i + 1 == slideCount ? 'activeBtn' : 'numBtn'}
              > </button>
            )
          })
        }
      </div>
    </div>
  )
};
export default Slider;