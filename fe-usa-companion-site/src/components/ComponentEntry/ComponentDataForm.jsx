import React, { useState, useEffect } from "react";
import { forms } from "../../lib/constants/forms";
import { SubmissionFormBar } from "../SubmissionFormComponents/SubmissionFormBar";
import { CloseButtonBar } from './CloseButton'
import { NextPrevBar } from '../NextPrevButtons/NextPrevBar'
import './ComponentSelectionForm.scss'
import { componentTypes } from '../../lib/constants/componentTypes'
import { componentFields } from '../../lib/constants/componentFields'
import { ErrorStep } from './ErrorStep'


export function ComponentDataForm(props) {
  const {
    componentType,
    prevHandler,
    nextHandler,
    toggleOverlay, 
    toggleOverlayHandler,
    values,
    children
  } = props

  const [componentData, setComponentData] = useState({
    "fields": "none",
  })

  const [toggleError, setToggleError] = useState(false) 

  const [formFields, setFormFields] = useState([])

  useEffect(() => {  
    if (!(componentType in componentTypes)) { 
      setToggleError(true)
    } else { 
      setFormFields(componentFields[componentType]) // TODO: Is this a good system? 
    }
    console.log('filler')
  }, [])

  // For a particular componentType, we just 
  // need to fetch a specific form, the specific 
  // forms will be listed somewhere else useEffect(() => {

  // }, [])

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
      <NextPrevBar 
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          first={false}
          end={true}
        /> 
        <SubmissionFormBar
          globalFormData={values}
          globalFormSubmit={'TODO'}
        />
      </div> 
    </>
  )
}
