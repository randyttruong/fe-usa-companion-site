import React from "react";
import './ComponentSelectionForm.scss'
import { FaRegCircleQuestion } from "react-icons/fa6";

export function ErrorStep(props) {
  const { children } = props
  return (
    <>
      <div className={'error-form-empty'}> 
        <div>
          <FaRegCircleQuestion  size={64}/>
        </div>
        <p className={'error-message'}>
          Something went wrong. Please
          close this window and try again.
        </p>
      </div> 
    </>
  )
}
