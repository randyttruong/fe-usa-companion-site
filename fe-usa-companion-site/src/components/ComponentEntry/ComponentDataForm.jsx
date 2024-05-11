import React, { useState, useEffect } from "react";
import { forms } from "../../lib/constants/forms";
import { SubmissionFormBar } from "../SubmissionFormComponents/SubmissionFormBar";
import { CloseButtonBar } from './CloseButton'
import { NextPrevBar } from '../NextPrevButtons/NextPrevBar'
import './ComponentSelectionForm.scss'
import { componentTypes } from '../../lib/constants/componentTypes'
import { componentFields } from '../../lib/constants/componentFields'
import { ErrorStep } from './ErrorStep'
import { pageTypes } from '../../lib/constants/PageTypes'
import { componentsByPages } from '../../lib/constants/ComponentsByPages'
import { HeaderForm } from '../forms/HeaderForm'


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
    children
  } = props

  const [componentData, setComponentData] = useState({
    "fields": "none",
  })

  const [toggleError, setToggleError] = useState(false) 
  const [formFields, setFormFields] = useState()
  const [formData, setFormData] = useState({})

  useEffect(() => {  
    if (!(page1Values)) {  
      setToggleError(true)
      return
    }

    const pageType = page1Values['pageType']
    const componentType = page1Values['componentName']
    
    if (!(pageType in pageTypes)) {  
      setToggleError(true) 
      return 
    }

    const newFormFields = componentsByPages[pageType][componentType]
    console.log(componentsByPages[pageType][componentType])


    setFormFields(newFormFields) // TODO: Is this a good system? 
  }, [])

  // For a particular componentType, we just 
  // need to fetch a specific form, the specific 
  // forms will be listed somewhere else 
  useEffect(() => {
    formValueHandler(formData)
  }, [formData])

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
          <div>
          <div>{page1Values['pageType']}</div>
          <div>{page1Values['componentName']}</div>
            {formFields}
          </div>
      }

      <NextPrevBar 
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          first={false}
          end={true}
        /> 
        <SubmissionFormBar
          globalFormData={formValues}
          globalFormSubmit={'TODO'}
        />
      </div> 
    </>
  )
}
