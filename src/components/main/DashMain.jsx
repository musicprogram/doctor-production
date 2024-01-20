import React,{Fragment, useEffect, useState, lazy, Suspense} from "react";


import {LogoMain} from "./LogoMain";
import {useRecoilState} from "recoil";
import {arrayLiquors, categoryMain, videoMain} from "../../states/mainState";



import {TabCategory} from "./TabCategory";
import {ObjectLiqueur} from "./ObjectLiqueur";
import {dataRules} from "../../data/dataRegletas";
import {LoaderMain} from "./LoaderMain";
import VideoBackground from "./VideoBackground.jsx";



export const DashMain = () =>{

  const [category, setCategory] = useRecoilState(categoryMain)
  const [liquors, setLiquors] = useRecoilState(arrayLiquors)
  const [videoBack, setVideoBack] = useRecoilState(videoMain)
  const [isBackground, setIsBackground] = useState(false)


  useEffect(()=>{
    if(videoBack === 2 || videoBack === 3 || videoBack === 6){
      setIsBackground(true)
    }

  },[])


  return(
    <Fragment>

      <div>
        <Suspense fallback={()=> <LogoMain/>}>
          <VideoBackground/>
        </Suspense>


        {
          category !== 0 && category !== -1 && (
            <div className={`contentTop zIndex animate__animated animate__fadeIn transBlack1`}>
              <div className="categoryMain">
                {
                  liquors.map((obj, i)=>{
                    return(
                      <ObjectLiqueur
                        category={category}
                        liquer={obj}
                        key={i} />
                    )
                  })
                }
              </div>

            </div>
          )
        }


        <div className={`zIndex2 content ${category !== 0 && 'transBlack'}`}>
          {
            category === 0 ? <LogoMain/> : <TabCategory/>
          }
        </div>

        <div className={`zIndex2 content ${category !== 0 && 'transBlack'}`}>
          {
            category === -1 && <LoaderMain/>
          }
        </div>

      </div>
    </Fragment>
  )
}