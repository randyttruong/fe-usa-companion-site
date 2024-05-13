import React, { useState, useEffect } from "react";
import { AutoForm } from "./GenerateForm";
import data from '../../lib/constants/Forms/Header.json'

export function HeaderForm(props) {
  const {
    formFields, 
    setPage2Values, 
    setFinished,
    children
  } = props

  const [formData, setFormData] = useState({
    'componentName': '',
    'componentDesc': '',
    'content': '',
  })

  const [errorMsg, setErrorMsg] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.componentName
    const desc = e.target.componentDesc
    const content = e.target.content


    if (name === ''
      || desc === ''
      || content === '') {
      setErrorMsg(!errorMsg);
    }

    const final = {
      'componentName': name,
      'componentDesc': desc,
      'content': content,
    }

    setFormData(final)
  }

  useEffect(() => {  
    console.log(formFields)
  }, [formFields])


  return (
    <>
      <AutoForm
        jsonData={data}
        setPage2Values={setPage2Values}
        setFinished={setFinished}
      />
    </>
  )
}
