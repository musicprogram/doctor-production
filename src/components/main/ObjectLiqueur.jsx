import {Fragment} from "react";

export const ObjectLiqueur = ({liquer}) =>{
  return(
    <Fragment>
      <div className="row mt-2 mb-2 textShadow3">
        <div className="col-8">
          <h5 className="text-left text-uppercase textCaprasimo colorTextGrad6 confTextGrad textObjTittle">
            {liquer.name}
          </h5>
        </div>

        <div className="col-4">

          <h4 className="mt-1 text-right font-weight-bold textAcme text-white fw-bold">
            {liquer.id === 1 ? '' + liquer.value : ''}
            {liquer.id === 2 ? 'Vaso: ' + liquer.value : ''}
            {liquer.id === 3 ? 'Vaso: ' + liquer.value : ''}
          </h4>

          <h4 className="mt-1 text-right textAcme font-weight-bold">

            {liquer.id === 1 ? '' + liquer.value2 : ''}
            {liquer.id === 2 ? 'Litro: ' + liquer.value2 : ''}
            {liquer.id === 3 ? '' + liquer.value2 : ''}

          </h4>
          <h4 className="mt-1 text-right textAcme font-weight-bold">
            {liquer.id === 2 ? '2 Litros: ' + liquer.value3 : ''}
          </h4>

        </div>
      </div>
      <p className="text-white textAcme textObj gradTextColor">
        {liquer.description}
      </p>
      <hr/>
    </Fragment>
  )
}