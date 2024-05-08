import React from 'react'
import { FaCirclePlus, FaAnglesDown } from 'react-icons/fa6'
import './NewComponent.scss'
import { ComponentSelectionForm } from '../ComponentEntry/ComponentType'
import { ComponentDataForm } from '../ComponentEntry/ComponentDataForm'
import { FormComplete } from '../ComponentEntry/FormComplete'

/* 
 * WizardForm
 */
function WizardForm(props) {
  const { pageType, children } = props

  // TODO: What form data do we need? 

  // TODO: How do I make a drop-down menu? 
  const [formData, setFormData] = useState({
    "componentName": "",
    "componentType": 0,
  })

  const [formStep, setFormStep] = useState(1);

  const [componentType, setComponentType] = useState(null)


  const globalFormSubmit = async (e) => {
    e.preventDefault()

    const url = `http://localhost:8000/new-component`;

    const data = {
      "filler": null,
    }

    // TODO: Note that depending on what kind of page 
    // that we're making this for, need to change 
    // the data 
    const resp = await fetch(url, data)
  }

  const onNext = () => {
    setFormStep(formStep + 1);
  }

  const onPrev = () => {
    setFormStep(formStep - 1);
  }

  const renderSteps = () => {
    switch (formStep) {
      case 1:
        return (
          <ComponentSelectionForm
            pageType={pageType}
            prevHandler={onPrev}
            nextHandler={onNext}
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
    <>
      {renderSteps()}
    </>
  )
}

/* 
 * AddButton
 */
function AddButton(props) {
  const { toggleVar, toggleHandler } = props

  onClick = (event) => {
    toggleHandler(!toggleVar)
  }

  return (
    <>
      {/* TODO: Add hover and on-click stuff */}
      <div className={'add-button'}>
        <FaCirclePlus />
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

  [overlayToggle, setOverlay] = useState(false)

  [componentPageCount, setComponentPageCount] = useState(0)

  const toggleHandler = (event) => {
    setToggle(!toggle)
  }
  return (
    <>
      <div>
        <AddButton
          toggleVar={overlayToggle}
          toggleHandler={setOverlay}
        />

        {toggle && WizardForm}

      </div>
    </>
  )
}
