import {Fragment, useEffect, useState} from "react";

import {useRecoilState} from "recoil";
import {categoryMain, videoMain} from "../../states/mainState";


const VideoBackground = () =>{
  const [category, setCategory] = useRecoilState(categoryMain)
  const [videoBack, setVideoBack] = useRecoilState(videoMain)


  useEffect(()=>{
    setTimeout(()=>{
      setCategory(1)
    }, 4400)
  },[])


  return(
    <>
        <video key={videoBack} autoPlay muted loop className="myVideo">
          <source src={`./videos/${videoBack}.mp4`} type="video/mp4"/>
        </video>
    </>
  )
}

export default VideoBackground;