import React, { useState, useEffect } from "react";
import forms from "../../lib/constants/forms";
import { SubmissionFormBar } from "../SubmissionFormComponents/SubmissionFormBar";

export function ComponentDataForm(props) {
  const {
    componentType,
    prevHandler,
    nextHandler,
    values,
    children
  } = props

  [componentData, setComponentData] = useState({
    "fields": "none",
  })

  // For a particular componentType, we just 
  // need to fetch a specific form, the specific 
  // forms will be listed somewhere else useEffect(() => {

  // }, [])

  return (
    <>
      {
        forms[componentType] // How do I specify the submission button thing? 
      }
      <SubmissionFormBar
        globalFormData={values}
        globalFormSubmit={'TODO'}
      />
    </>
  )
}
