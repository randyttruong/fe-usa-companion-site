import React from "react";
import { SubmissionFormButton } from "./SubmissionFormButton";

export function SubmissionFormBar(props) {
  const {
    globalFormData,
    globalFormSubmit,
    nextHandler,
    children
  } = props

  return (
    <>
      {/* TODO: Use the same form-bottom-bar across all buttons... */}
      <div className={'form-bottom-bar'}>
        <SubmissionFormButton
          globalFormData={globalFormData}
          globalFormSubmit={globalFormSubmit}
          nextHandler={nextHandler}
        />
      </div>
    </>
  )
}
