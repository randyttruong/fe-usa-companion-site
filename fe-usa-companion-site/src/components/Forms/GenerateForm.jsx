import { Input } from "./Input";
import { Form } from './Form'
import { DropDownMenu } from "./DropDownMenu";
import React, { useState, useEffect } from 'react'
import { FormSection } from './FormSection'
import { CreateButton } from "./CreateButton";

export function AutoForm(props) {
  const {
    jsonData,
    children,
    setPage2Values, 
    setFinished, 
  } = props

  const [ formValues, setFormValues ] = useState({}) 

  const handleInputChange = (sectionId, inputId, value) => {  
    console.log(`This is sectionId: ${sectionId}`)
    console.log(`This is inputId: ${inputId}`)
    console.log(`This is value: ${value}`)
    const updatedFormInputs = {  
      ...formValues[sectionId],
      [inputId]: value, 
    }

    setFormValues({  
      ...formValues, 
      [sectionId]: updatedFormInputs
    })
  } 

  const submitHandler = () => {  
    setFinished(true) 
    setPage2Values(formValues)
  }

  return (
    <>
      <Form>
        {
          jsonData.sections.map((sectionData) => {
            return (
              <FormSection
                sectionData={sectionData}
                handleInputChange={handleInputChange}
              />
            )
          })
        }
        <CreateButton 
          formSubmitHandler={submitHandler}
        />
      </Form>
    </>
  )
}
