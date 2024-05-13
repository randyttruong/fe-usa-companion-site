import React, { useState } from "react";
import './Form.scss'

export function Form(props) {

  const { children } = props

  return (
    <>
      <div className={'form-container'}>
        <div className={'form-header'}>
        </div>
        {children}
      </div>
    </>
  )
}
