import React from "react";
import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";

// TODO: Styling 
export function NextPrevBar(props) {
  const { nextHandler, prevHandler, children } = props
  return (
    <>
      <div className={'next-prev-bar'}>
        <NextButton nextHandler={nextHandler} />
        <PrevButton prevHandler={prevHandler} />
      </div>
    </>
  )
}
