import React, { useState } from "react";
import { AutoForm } from "./GenerateForm";
import data from '../../lib/constants/Forms/Card.json'

export function CardForm(props) {
  const { setComponentData, children } = props

  const [formData, setFormData] = useState({
    'componentName': '',
    'componentDesc': '',
    'content1': '',
    'content2': '',
  })
  const [errorMsg, setErrorMsg] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()

    const name = e.target.componentName;
    const desc = e.target.componentDesc;
    const content1 = e.target.content1;
    const content2 = e.target.content1;

    if (name === ''
      || desc === ''
      || content1 === ''
      || content2 === '') {
      setErrorMsg(!errorMsg)
    }

    const final = {
      'componentName': name,
      'componentDesc': desc,
      'content1': content1,
      'content2': content2,
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
