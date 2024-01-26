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

  const token = "c91269e6a82136c5068d62289152a836"

  useEffect(()=>{
    if(videoBack === 2 || videoBack === 3 || videoBack === 6){
      setIsBackground(true)
    }
  },[])


  const [userId, setUserId] = useState('1385906945355536');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Configuramos la URL de la solicitud con el token
   // const url = `https://graph.instagram.com/v18.0/${userId}?fields=id,username&access_token=${token}`;
    const url = `https://graph.instagram.com/me?fields=id,username&access_token=${token}`;

    // Realizamos la solicitud a la API
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Actualizamos el estado del usuario con los datos de la respuest
        debugger
        setUser(data);
      })
      .catch(error => {
        // Manejamos el error de la solicitud
        console.log(error);
      });
  }, [userId]);

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


        <div className={`zIndex2 contentFixed ${category !== 0 && 'transBlack2'}`}>
          {
            category === 0 ? <LogoMain/> : <TabCategory/>
          }
        </div>


          {
            category === -1 &&(
              <div className={`zIndex2 content ${category !== 0 && 'transBlack'}`}>
                <LoaderMain/>
              </div>
              )
          }


      </div>
    </Fragment>
  )
}