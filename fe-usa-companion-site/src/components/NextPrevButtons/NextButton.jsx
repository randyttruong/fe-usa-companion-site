import React, { useState } from "react";
import './Buttons.scss'

export function NextButton(props) {
  const { nextHandler, children } = props

  return (
    <>
      <div
        className={'next-prev-button'}
        onClick={nextHandler}
      >
        Next
      </div>
    </>
  )
}

