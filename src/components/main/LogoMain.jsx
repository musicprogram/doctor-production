import {useEffect, useRef, useState} from "react";


export const LogoMain = () =>{
  const logoRef = useRef()

  return(
    <>
      <div>
        <div className="height-100vh center-aligned">

              <>
                <img
                  ref={logoRef}
                  src={"/doctor-production/images/logoDoctor.png"}
                  alt=""
                  className="background-image img-fluid animate__animated animate__backInDown" />

              </>

        </div>

      </div>
    </>
  )
}