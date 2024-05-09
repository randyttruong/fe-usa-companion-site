import React from "react";
import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";
import './Buttons.scss'

// TODO: Styling 
export function NextPrevBar(props) {
  const { nextHandler, prevHandler, first, end, children } = props

  const handleFirst = () => {  
    if (!first && !end) { 
      return ( 
        <> 
          <div className={'next-prev-bar'}>
            <PrevButton prevHandler={prevHandler} />
            <NextButton nextHandler={nextHandler} />
          </div> 
        </> 
      )
    } else  {
      if (!end) {
        return ( 
          <>
            <div className={'next-bar'}> 
              <NextButton nextHandler={nextHandler} />
            </div>
          </> 
        )
      } else {
      return (  
        <>  
          <div className={'prev-bar'}>
            <PrevButton prevHandler={prevHandler} /> 
          </div>
        </> 
        )
      } 
    }
  }

  return (
    <>
      {handleFirst()}
    </>
  )
}
