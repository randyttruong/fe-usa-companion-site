import React, { useState, useEffect } from "react";
import { CloseButtonBar } from "../WizardCloseButton/CloseButton";
import { NextPrevBar } from '../NextPrevButtons/NextPrevBar'
import { ErrorStep } from "../WizardErrorMessage/WizardErrorMessage";
import { pageTypes } from '../../lib/constants/PageTypes'
import { componentsByPages } from '../../lib/constants/ComponentsByPages'

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
    children
  } = props

  const [componentData, setComponentData] = useState({
    "fields": "none",
  })

  const [toggleError, setToggleError] = useState(false)
  const [formFields, setFormFields] = useState()
  const [formData, setFormData] = useState({})
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    console.log("These are page1 values", page1Values)
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

  useEffect(() => {
    if (finished === true) {
      nextHandler()
    }
  }, [setFinished])

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

    setFinished(true)
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
          <div>
            {formFields}
          </div>
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
