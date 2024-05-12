import React, { useState } from "react";

export function SubmissionFormButton(props) {
  const {
    globalFormData,
    globalFormSubmit,
    nextHandler,
    children
  } = props

  const submitForm = () => {
    globalFormSubmit()
    nextHandler()
  }

  return (
    <>
      <button
        onClick={globalFormSubmit}
      >Create
      </button>
    </>
  )
}
