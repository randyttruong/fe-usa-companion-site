import React, { useState } from "react";

export function SubmissionFormButton(props) {
  const {
    globalFormData,
    globalFormSubmit,
    children
  } = props

  // TODO: This is going to be a large submit button, probably 
  // need to put into some hooks file 
  const submitHandler = () => {
    globalFormSubmit()
  }

  return (
    <>
      <button onClick={submitHandler}>Create</button>
    </>
  )
}
