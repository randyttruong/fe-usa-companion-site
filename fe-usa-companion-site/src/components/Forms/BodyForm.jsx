import React, { useState, useEffect } from "react";
import { AutoForm } from "./GenerateForm";
import data from '../../lib/constants/Forms/Body.json'


/* 
 * TODO: Styling
  */
export function BodyForm(props) {
  const { setComponentData, children } = props

  const [formData, setFormData] = useState({
    'componentName': '',
    'componentDesc': '',
    'content': '',
  })

  const [errorMsg, setErrorMsg] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault()

    const name = e.target.componentName;
    const desc = e.target.componentDesc;
    const content = e.target.content;

    if (name === ''
      || desc === ''
      || content === '') {
      // TODO: Where do I handle this? 
      setErrorMsg(!errorMsg)
    }

    const final = {
      'componentName': name,
      'componentDesc': desc,
      'content': content,
    }

    setFormData(final)
  }

  return (
    <>
      <AutoForm
        jsonData={data}
      />
    </>
  )
}
