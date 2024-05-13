import React, { useState, useEffect } from "react";
import { CloseButtonBar } from "../WizardCloseButton/CloseButton";
import { NextPrevBar } from '../NextPrevButtons/NextPrevBar'
import { ErrorStep } from "../WizardErrorMessage/WizardErrorMessage";
import { pageTypes } from '../../lib/constants/PageTypes'
import { componentsByPages } from '../../lib/constants/ComponentsByPages'
import { HeaderForm } from '../Forms/HeaderForm.jsx'
import { BodyForm } from '../Forms/BodyForm.jsx'
import { CardForm } from '../Forms/CardForm.jsx'

import './AddFormParts.scss'

export function ComponentDataForm(props) {
  const {
    componentType,
    prevHandler,
    nextHandler,
    toggleOverlay,
    toggleOverlayHandler,
    page1Values,
    formValues,
    formValueHandler,
    setFormStep, 
    children
  } = props

  const [componentData, setComponentData] = useState({
    "fields": "none",
  })

  const [toggleError, setToggleError] = useState(false)
  const [formData, setFormData] = useState({})
  const [formFields, setFormFields] = useState({})
  const [finished, setFinished] = useState(false)


  useEffect(() => {
    formValueHandler(null)
  }, [])

  useEffect(() => {
    if (finished === true) {
      nextHandler()
      globalFormSubmit()
    }
  }, [formValues])

  const globalFormSubmit = async () => {
    if (!formData) {
      return (<ErrorStep />)
    }

    // TODO: Write the route for sending new row to 
    // database. 
    const url = `http://localhost:8000`
    const data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {}
    }
    console.log('submitted!')

  }

  useEffect(() => { 
    console.log("Finished setting form fields")
    console.log(formValues)
  }, [formValues])

  
  function renderForm() {  
    const pageType = page1Values['pageType']
    const componentType = page1Values['componentType']

    switch (pageType) {  
      case 0:  
        switch (componentType) { 
          case 0: 
            return <HeaderForm 
              formFields={formFields} 
              setFormFields={setFormFields}
              setPage2Values={formValueHandler}
              setFinished={setFinished} 
            /> 

          case 1: 
            return <BodyForm 
              formFields={formFields} 
              setFormFields={setFormFields}
              setPage2Values={formValueHandler}
              nextHandler={nextHandler}
              setFinished={setFinished} 
            /> 
        }

      case 1: 
        switch (componentType) { 
          case 'header': 
            return <HeaderForm 
              formFields={formFields} 
              setFormFields={setFormFields}
              setPage2Values={formValueHandler}
              nextHandler={nextHandler}
              setFinished={setFinished} 
            /> 
          case 'body': 
            return <BodyForm 
              formFields={formFields} 
              setFormFields={setFormFields}
              setPage2Values={formValueHandler}
              nextHandler={nextHandler}
              setFinished={setFinished} 
            /> 
          case 'profileCard': 
            return <CardForm 
              formFields={formFields} 
              setFormFields={setFormFields}
              setPage2Values={formValueHandler}
              setFinished={setFinished} 
              nextHandler={nextHandler}
            /> 
        }

      case 2: 
        switch (componentType) { 
          case 'header': 
            return <HeaderForm 
              formFields={formFields} 
              setFormFields={setFormFields}
              setPage2Values={formValueHandler}
              nextHandler={nextHandler}
              setFinished={setFinished} 
            /> 
          case 'body': 
            return <BodyForm 
              formFields={formFields} 
              setFormFields={setFormFields}
              setPage2Values={formValueHandler}
              nextHandler={nextHandler}
              setFinished={setFinished} 
            /> 
        }
      case 3: 
        switch (componentType) { 
          case 'header': 
            return <HeaderForm 
              formFields={formFields} 
              setFormFields={setFormFields}
              setPage2Values={formValueHandler}
              nextHandler={nextHandler}
              setFinished={setFinished} 
            /> 
          case 'body': 
            return <BodyForm 
              formFields={formFields} 
              setFormFields={setFormFields}
              setPage2Values={formValueHandler}
              nextHandler={nextHandler}
              setFinished={setFinished} 
            /> 
        }
    }
  }

  return (
    <>
      <div className={'overlay-pop-up-menu'}>
        <CloseButtonBar
          toggleOverlay={toggleOverlay}
          toggleOverlayHandler={toggleOverlayHandler}
        />
        {
          toggleError && <ErrorStep />
          // forms[componentType] // How do I specify the submission button thing? 
        }
        { 
          // This just creates an <AutoForm />  element 
          // that is based on a corresponding JSON file 
          
          renderForm()
        }

        <NextPrevBar
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          first={false}
          end={true}
        />
      </div>
    </>
  )
}
