
import {Fragment, useEffect, useRef} from "react";




export const LoaderMain = () =>{
  const logoRef = useRef()

  return(
    <Fragment>
      <div>
        <div className="height-100vh center-aligned">
          <img
            ref={logoRef}
            src={'/images/logoDoctor.png'}
            alt=""
            className="background-image imgLoader animate__animated animate__infinite	infinite animate__heartBeat" />
        </div>
      </div>
    </Fragment>
  )
}