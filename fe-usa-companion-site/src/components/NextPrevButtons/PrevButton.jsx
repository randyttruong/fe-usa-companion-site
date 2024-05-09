import React, { useState } from "react";
import './Buttons.scss'

export function PrevButton(props) {
  const { prevHandler, children } = props

  return (
    <>
      <div
        className={'next-prev-button'}
        onClick={prevHandler}
      >
        Prev 
      </div>
    </>
  )
}
