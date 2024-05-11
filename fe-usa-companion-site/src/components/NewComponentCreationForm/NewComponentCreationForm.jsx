import React, { useState, useEffect } from 'react'
import { FaCirclePlus, FaAnglesDown } from 'react-icons/fa6'
import './NewComponentCreationForm.scss'
import { ComponentSelectionForm } from '../ComponentEntry/ComponentSelectionForm'
import { ComponentDataForm } from '../ComponentEntry/ComponentDataForm'
import { FormComplete } from '../ComponentEntry/FormComplete'
import { CloseButtonBar } from '../ComponentEntry/CloseButton.jsx'

/* 
 * WizardForm
 */
function WizardForm(props) {
  const { pageType, toggleOverlay, toggleOverlayHandler, children } = props

  // TODO: What form data do we need? 

  // TODO: How do I make a drop-down menu? 
  const [formData, setFormData] = useState({
    "componentName": "",
    "componentType": 0,
  })

  const [formStep, setFormStep] = useState(1);

  const [part1Form, setPart1Form] = useState({
    'pageType': 0,          // should be an integer 
    'componentType': '',    // should be a string 
    'set': 0, 
  })

  const [part2Form, setPart2Form] = useState({
    'header1': 'null', 
    'set': 0, 
  })  

  useEffect(() => {  
    // TODO: Fetch the headers from the header file 
  }, [part1Form])

  useEffect(() => {  
    // TODO: Fetch the headers from the header file 

  }, [part2Form])

  const [componentType, setComponentType] = useState(1)


  const globalFormSubmit = async (e) => {
    e.preventDefault()

    const url = `http://localhost:8000/new-component`;

    const data = {
      "filler": null,
    }
  }

  const onNext = () => {
    setFormStep(formStep + 1);
  }

  const onPrev = () => {
    setFormStep(formStep - 1);
  }

  const renderSteps = (formStep) => {
    switch (formStep) {
      case 1:
        return (
          <ComponentSelectionForm
            pageType={pageType}
            prevHandler={onPrev}
            nextHandler={onNext}
            toggleOverlay={toggleOverlay}
            toggleOverlayHandler={toggleOverlayHandler}
            formValues={part1Form}
            formValueHandler={setPart1Form}
          />)
      case 2:
        return (
          <ComponentDataForm
            componentType={componentType}
            prevHandler={onPrev}
            nextHandler={onNext}
            globalFormSubmit={globalFormSubmit}
            page1Values={part1Form}
            formValues={part2Form}
            formValueHandler={setPart2Form}
          />
        )
      default:
        return (
          <FormComplete />
        )
    }
  }

  return (
    <div className={'pop-up-menu-overlay'}> 
      {renderSteps(formStep)}
    </div> 
  )
}

/* 
 * AddButton
 */
function AddButton(props) {
  const { toggleVar, toggleHandler } = props

  const onClick = (event) => {
    toggleHandler(!toggleVar)
  }

  return (
    <>
      {/* TODO: Add hover and on-click stuff */}
      <div className={'button-container'}> 
        <div className={'add-button'} onClick={onClick}>
          Add
        </div>
      </div>
    </>
  )
}


function EditButton(props) {
  const { toggleVar, toggleHandler } = props

  const onClick = (event) => {
    toggleHandler(!toggleVar)
  }

  // TODO: Add edit component functionality 

  return (
    <>
      {/* TODO: Add hover and on-click stuff */}
      <div className={'button-container'}> 
        <div className={'add-button'} onClick={onClick}>
          Edit
        </div>
      </div>
    </>
  )
}

function SaveButton(props) {
  const { toggleVar, toggleHandler } = props

  /* 
   * TODO:  Add save functionality 
   */ 
  const onClick = async (event) => { 

    const url = `http://localhost:8000/update-row` 
    const data = {  
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json', 
      }, 
      body: {  
        'filler': null, 
      }
    }

    const resp = await fetch(url, data) 

    console.log(resp)
  }


  return (
    <>
      {/* TODO: Add hover and on-click stuff */}
      <div className={'button-container'}> 
        <div className={'add-button'} onClick={onClick}>
          Save
        </div>
      </div>
    </>
  )
}

function DeleteButton(props) {    
  const { children } = props 

  const onClick = async (event) => { 
    const url = `http://localhost:8000/delete-homepage-component/`
    const data = {  
      method: 'DELETE', 
      headers: { 
        'Content-Type': 'application/json',
      },
    }

    const resp = await fetch(url, data) 

    data = await resp.json()
  }

  // TODO: Add deletion functionality 
  return ( 
    <> 
      <div className={'button-container'}> 
        <div className={'add-button'} onClick={onClick}>
          Delete 
        </div>
      </div>
    </> 
  )

}




/* 
 * NewComponent
 *
 * This is a component that will allow you to 
 * add a new component for a given page. 
 *
 * The important data here is that 
 * this component knows what page it is 
 * trying to add a new comopnent for and 
 * then just fetches all of the appropriate
 * components that can be added to it.
 */
export function NewComponent(props) {
  const { pageType } = props

  const [overlayToggle, setOverlay] = useState(false)
  const [componentPageCount, setComponentPageCount] = useState(0)

  const toggleHandler = (event) => {
    setOverlay(!overlayToggle)
  }

  return (
    <>
      <div className={'new-component-container'}>
        <AddButton
          toggleVar={overlayToggle}
          toggleHandler={toggleHandler}
        />
        <EditButton 
        /> 
        <SaveButton
        />
        {overlayToggle && <WizardForm pageType={0} toggleOverlayHandler={toggleHandler}/>}
      </div>
    </>
  )
}
