import {Fragment} from "react";

export const ObjectLiqueur = ({liquer, category}) =>{
  return(
    <Fragment>
      <div className="row mt-2 mb-2 textShadow3">
        <div className="col-8">
          <h5 className="text-left text-uppercase textCaprasimo colorTextGrad6 confTextGrad textObjTittle">
            {liquer.name}
          </h5>
        </div>

        <div className="col-4">
          {
            liquer.value && (
              <>
                <h4 className="mt-1 text-right font-weight-bold textAcme text-white fw-bold">

                  <>
                    {
                      category === 1 && 'Regleta: ' ||
                      category === 2 && 'X3: ' ||
                      (category === 3 || category === 4) && 'Personal: ' ||
                      category === 5 && 'Vaso: '
                    }
                    { liquer.value }
                  </>

                </h4>
              </>
            )
          }

          {
            liquer.value2 && (
              <>
                <h4 className="mt-1 text-right textAcme font-weight-bold">
                  <>
                    {
                      category === 1 && 'Shot individual: ' ||
                      category === 2 && 'Individual: ' ||
                      (category === 3 || category === 4 || category === 5) && '1 litro: '
                    }
                    { liquer.value2 }
                  </>
                </h4>
              </>
            )
          }

          {
            liquer.value3 && <h4 className="mt-1 text-right textAcme font-weight-bold">
              {(category === 3 || category === 4 || category === 5) && '2 litros: '} {liquer.value3 }
            </h4>
          }


        </div>
      </div>
      <p className="text-white textAcme textObj gradTextColor">
        {liquer.description}
      </p>
      <hr/>
    </Fragment>
  )
}