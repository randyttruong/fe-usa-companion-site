import React, { useState, useEffect } from 'react'
import { ComponentSelectionForm } from '../AddFormWizardSegments/AddWizardFormPart1'
import { ComponentDataForm } from '../AddFormWizardSegments/AddWizardFormPart2'
import { FormComplete } from '../WizardCompleteMessage/WizardCompleteMessage'
import './AddComponentButton.scss'

/* 
 * WizardForm
 */
export function WizardForm(props) {
  const {
    pageType,
    toggleOverlay,
    toggleOverlayHandler,
    children
  } = props

  const [formStep, setFormStep] = useState(1);

  const [part1Form, setPart1Form] = useState({
    'pageType': 0,          // should be an integer 
    'componentType': '',    // should be a string 
    'set': 0,
  })

  const [part2Form, setPart2Form] = useState({})

  // TODO: This is for filling out the different fields 
  const handleInputChange = (sectionId, inputId, value) => {
    const updateSection = {
      ...part2Form[sectionId],
      [inputId]: value,
    }
  }

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
          <div>
            <div>
              {part1Form.pageType}
              {part1Form.componentType}
              {part1Form.componentName}
            </div>
            <ComponentDataForm
              componentType={componentType}
              prevHandler={onPrev}
              nextHandler={onNext}
              globalFormSubmit={globalFormSubmit}
              toggleOverlay={toggleOverlay}
              toggleOverlayHandler={toggleOverlayHandler}
              page1Values={part1Form}
              formValues={part2Form}
              formValueHandler={setPart2Form}
            />
          </div>
        )
      default:
        return (
          <FormComplete
            toggleOverlayHandler={toggleOverlayHandler}
          />
        )
    }
  }

  return (
    <div className={'pop-up-menu-overlay'}>
      {renderSteps(formStep)}
    </div>
  )
}


