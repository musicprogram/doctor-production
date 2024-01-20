import {useEffect, useRef, useState} from "react";


export const LogoMain = () =>{
  const logoRef = useRef()

  const [isLogo,setIsLogo] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLogo(false)
    }, 2400)
  },[])

  return(
    <>
      <div>
        <div className="height-100vh center-aligned">
          {
            isLogo ? (
              <>
                <img
                  ref={logoRef}
                  src={"/doctor-production/images/logoDoctor.png"}
                  alt=""
                  className="background-image img-fluid animate__animated animate__backInDown" />

              </>
            ): (
              <>
                <h1 className="textCaprasimo animate__animated animate__zoomIn  centerEasy  colorTextGrad6 confTextGrad  text-center textShadow3">
                  Shots and Drinks
                </h1>
              </>
            )
          }
        </div>

      </div>
    </>
  )
}