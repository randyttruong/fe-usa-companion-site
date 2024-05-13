import React from "react";
import './Form.scss'

export function CreateButton(props) {
  const {
    formSubmitHandler
  } = props

  return (
    <>
      <button
        className={'create-button'}
        onClick={formSubmitHandler}
      >
        Create
      </button>
    </>
  )
}

