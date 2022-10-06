import React, {useRef, useEffect} from 'react'

const Parallels = ()=>{

  
  
  const pTag1 = useRef();
  const pTag2 = useRef();
  const textArr1 = 'PARIS BAGUETTE -'.split(' ');
  const textArr2 = '- PARIS BAGUETTE'.split(' ');

  let count1 = 0;
  let count2 = 0;

  useEffect(()=>{
    
    const initTexts = (pTag, textArray)=>{
      textArray.push(...textArray)
      for(let i = 0; i < textArray.length; i++){
        pTag.current.innerText += `${textArray[i]}\u00a0\u00a0\u00a0`
      }
    }
    initTexts(pTag1,textArr1);
    initTexts(pTag2,textArr2);
    
    const marqueeText = (count,pTag,direction)=>{
      if( count > pTag.scrollWidth / 2 ){
        pTag.current.style.transform = `translateX(0)`
        count = 0;
      }
      pTag.current.style.transform = `translateX(${count * direction}px)`
      return count;
    }

    function animate(){
      count1++
      count2++

      count1 = marqueeText(count1,pTag1,-1) //왼쪽으로
      count2 = marqueeText(count2,pTag2, 1) //오른쪽으로

      window.requestAnimationFrame(animate);
    }
    animate();
  }) //무한반복을 위한 []부재처리

  return(
    <div className='coverContainer'>
      <div className='cover'>
        <p ref={pTag1} className='parallel first-parallel'></p>
      </div>
      <div className='cover cover2'>
        <p ref={pTag2} className='parallel second-parallel'></p>
      </div>
    </div>
  )
}
export default Parallels;