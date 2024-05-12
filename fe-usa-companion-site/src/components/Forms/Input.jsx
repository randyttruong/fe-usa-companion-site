import React, { useEffect } from "react";
import './Form.scss'

export function Input(props) {
  const {
    header,

    val,
  } = props

  return (
    <>
      <div className={'form-input'}>
        <div className={'form-input-header'}>
          {header}
        </div>
        <input
          className={'form-input-body'}
          placeholder={'Type here'}
          val={val}
        >
        </input>
      </div>
    </>
  )
}
