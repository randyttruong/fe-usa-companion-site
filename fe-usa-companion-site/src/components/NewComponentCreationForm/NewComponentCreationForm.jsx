import React, { useState } from 'react'
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
            values={formData}
          />)
      case 2:
        return (
          <ComponentDataForm
            componentType={componentType}
            prevHandler={onPrev}
            nextHandler={onNext}
            globalFormSubmit={globalFormSubmit}
            values={formData}
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
      <div className={'add-button'} onClick={onClick}>
        <FaCirclePlus size={16}/>
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
      <div>
        <AddButton
          toggleVar={overlayToggle}
          toggleHandler={toggleHandler}
        />

        {overlayToggle && <WizardForm pageType={0} toggleOverlayHandler={toggleHandler}/>}

      </div>
    </>
  )
}
