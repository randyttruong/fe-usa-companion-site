import React, { useEffect } from "react";
import './Form.scss'

export function Input(props) {
  const {
    inputId,
    sectionId, 
    header,
    handleInputChange, 
    children,
  } = props

  const inputChangeHandler = (e) => {  
    handleInputChange(sectionId, inputId, e.target.value)
  }

  return (
    <>
      <div className={'form-input'}>
        <div className={'form-input-header'}>
          {header}
        </div>
        <input
          className={'form-input-body'}
          placeholder={'Type here'}
          onChange={inputChangeHandler}
        >
        </input>
      </div>
    </>
  )
}
