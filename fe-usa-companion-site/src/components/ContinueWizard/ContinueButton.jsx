import React, { useState, useEffect } from "react";
import '../AddComponentButton/AddComponentButton.scss'
import { ErrorStep } from '../WizardErrorMessage/WizardErrorMessage.jsx'
import { FormComplete } from '../WizardCompleteMessage/WizardCompleteMessage.jsx'
import { HeaderForm } from '../Forms/HeaderForm.jsx'
import { BodyForm } from '../Forms/BodyForm.jsx'
import { CardForm } from '../Forms/CardForm.jsx'
import { CloseButtonBar } from '../WizardCloseButton/CloseButton'
import './ContinueButton.scss'


function EditContinueWizard(props) {

  const {
    selectedComp,
    toggleOverlay, 
  } = props

  const [currStep, setCurrStep] = useState(0)
  const [foundError, setFoundError] = useState(false)
  const [finished, setFinished] = useState(false)

  const [formFields, setFormFields] = useState({ 'default': null })
  const [page2Values, setPage2Values] = useState({ 'default': null })


  const submitHandler = async () => {

    const url = 'http://localhost:8080/delete-component'
    const data = {
      method: 'UPDATE',
      headers: "something",
      body: selectedComp,
    }

    const resp = await fetch(url, data)

    if (!(resp.ok)) {
      setFoundError(!foundError)
      console.log("ERROR: Something went wrong when \
                  deleting component. Please try again")
      setCurrStep(-1)
      return
    }

    console.log("Successfully deleted component.")

    setFinished(!finished)
  }

  const renderComponentForm = () => {
    const currType = selectedComp['type']
    switch (true) {
      case currType.includes('header'):
        return <HeaderForm
          formFields={formFields}
          setFormFields={setFormFields}
          setPage2Values={setPage2Values}
          setFinished={setFinished}
        />
      case currType.includes('body'):
        return <BodyForm
          formFields={formFields}
          setFormFields={setFormFields}
          setPage2Values={setPage2Values}
          setFinished={setFinished}
        />
      case currType.includes('profileCard'):
        return <CardForm
          formFields={formFields}
          setFormFields={setFormFields}
          setPage2Values={setPage2Values}
          setFinished={setFinished}
        />
    }
  }

  const renderWizard = () => {
    switch (currStep) {
      case -1:
        return (
          <>
            <ErrorStep />
          </>
        )
      case 0:
        return (
          <>
            <div className={'overlay-pop-up-menu'}>
            <CloseButtonBar  
              toggleOverlayHandler={toggleOverlay}
            /> 
              {
                renderComponentForm()
              }
            </div>
          </>
        )
      case 2:
        return (
          <>
            <FormComplete />
          </>
        )
    }
  }

  return (
    <>
      <div className={'pop-up-menu-overlay'}>
        {renderWizard()}
      </div>
    </>
  )
}

function DeleteContinueWizard(props) {

  const {
    selectedComp
  } = props

  const [confirm, setConfirm] = useState(false)

  const [currStep, setCurrStep] = useState(0)
  const [foundError, setFoundError] = useState(false)
  const [completed, setCompleted] = useState(false)

  const submitHandler = async () => {

    const url = 'http://localhost:8080/delete-component'
    const data = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: selectedComp,
    }

    const resp = await fetch(url, data)

    if (!(resp.ok)) {
      setFoundError(!foundError)
      console.log("ERROR: Something went wrong when \
                  deleting component. Please try again")
      setCurrStep(-1)
      return
    }

    console.log("Successfully deleted component.")

    setCompleted(completed)
  }

  const renderWizard = () => {
    switch (currStep) {
      case -1:
        return (
          <>
            <ErrorStep />
          </>
        )
      case 0:
        return (
          <>
            <div className={'overlay-pop-up-menu'}>
              <p>
              Are you sure that you want to delete this component? 
              </p> 
              <p>
              This action cannot be undone.
              </p> 
              <button 
                onClick={submitHandler}
                className={'delete-button'}
              >   
              Yes, I am sure
                
              </button> 
            </div>
          </>
        )
      case 2:
        return (
          <>
            <FormComplete />
          </>
        )
    }
  }

  return (
    <>
      <div className={'pop-up-menu-overlay'}>
        {renderWizard()}
      </div>
    </>
  )
}

export function ContinueButton(props) {
  const {
    globalMode,
    selectedComp,
  } = props

  const [toggleContinue, setToggleContinue] = useState(false)

  const continueHandler = () => {
    setToggleContinue(!toggleContinue)
  }

  return (
    <>
      <div className={'button-container'}>
        <div className={'add-button'} onClick={continueHandler}>
          Continue
        </div>
      </div>
      {
        (globalMode === 1
          && toggleContinue === true)
        &&
        <EditContinueWizard
          selectedComp={selectedComp}
          toggleOverlay={setToggleContinue}
        />
      }
      {
        (globalMode === 2
          && toggleContinue === true) &&
        <DeleteContinueWizard
          selectedComp={selectedComp}
          toggleOverlay={setToggleContinue}
        />
      }
    </>
  )
}
