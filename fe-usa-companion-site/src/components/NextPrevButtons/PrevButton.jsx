
import React, { useState } from "react";

export function PrevButton(props) {
  const { prevHandler, children } = props

  return (
    <>
      <div
        className={'next-prev-button'}
        onClick={prevHandler}
      >
        Next
      </div>
    </>
  )
}
