import {Fragment} from "react";

import {Container, Navbar, ButtonGroup, Nav} from 'react-bootstrap';
import {sectionCategories} from "../../data/dataMain";
import {useRecoilState} from "recoil";
import {arrayLiquors, categoryMain} from "../../states/mainState";
import {dataRules} from "../../data/dataRegletas";
import {dataCocktails} from "../../data/dataCocktails";
import {dataBeers} from "../../data/dataBeers";
import {dataShots} from "../../data/dataShots.js";
import {dataSubmarinos} from "../../data/dataSubmarinos.js";
import {dataSodas} from "../../data/dataSodas.js";


export const TabCategory = () =>{
  const [category, setCategory] = useRecoilState(categoryMain)
  const [liquors, setLiquors] = useRecoilState(arrayLiquors)

  const handleSectionClick = (section) =>{
    if(section){
      setCategory(-1)

      setTimeout(()=>{
// console.log(section)
        section.id === 1 && setLiquors(dataShots) ||
        section.id === 2 && setLiquors(dataSubmarinos) ||
        section.id === 3 && setLiquors(dataCocktails) ||
        section.id === 4 && setLiquors(dataBeers) ||
        section.id === 5 && setLiquors(dataSodas)
        setCategory(section.id)
      },500)

    }

  }

  return(
    <Fragment>



      <Nav className="justify-content-center animate__animated animate__fadeIn">
        {
          sectionCategories.map((section, i)=>{
            return(
              <Fragment>
                <Nav.Item key={i} onClick={()=> handleSectionClick(section)}>
                  <Nav.Link>
                  <span className={`textCaprasimo btnTabCat    ${category === section.id ? 'colorTextGrad6' : 'colorTextGrad5'}`}>
                    {section.category}
                  </span>
                  </Nav.Link>
                </Nav.Item>
              </Fragment>
            )
          })
        }

      </Nav>
    </Fragment>
  )
}