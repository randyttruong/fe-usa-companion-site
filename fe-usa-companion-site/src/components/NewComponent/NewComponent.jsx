import React from 'react'
import { FaCirclePlus, FaAnglesDown } from 'react-icons/fa6'
import './NewComponent.scss'
import { ComponentSelectionForm } from '../ComponentEntry/ComponentType'
import { ComponentDataForm } from '../ComponentEntry/ComponentDataForm'


//
// Maybe make a generalized list of components 
// that everyone can use? 
//
// The main phil is that everything that will
// be made will just end up being 
//

/* 
 * toggledForm
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


  const onSubmit = async (e) => {
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

  const renderSteps = () => {
    switch (formStep) {
      case 1: return <ComponentSelectionForm pageType={pageType} />;
      case 2: return <ComponentDataForm componentType={} />;
      case 3: return <PositionForm />;
    }

    // Note, at this point, the 
    return (
      <>
        <div className={'overlay'}>
          <div className={'contextMenu'}>
            {renderSteps()}
            <form>
              <label>
                <input
                  placeholder={'Name of new component'}
                  type={'text'}
                  name={'name'}
                />
              </label>
              <input
                placeholder={'What does this component do?'}
                type={'text'}
              />
              <label>
                {/* The rest of this component should just contain 
              component-unique information, such as the fields*/}
              </label>
              <label>
                <input />
              </label>
            </form>
          </div>
        </div>
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
   * MoreButton 
   *
   * This is literally just the button that just 
   * triggers the WizardForm
   */
  function MoreButton() {
    const [count, setCount] = useState(0)

    const countHandler = (e) => {
      setCount(count + 1)
    }

    return (
      <>
        <div onClick={countHandler}>
          <FaAnglesDown />
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

    toggleHandler = (event) => {
      setToggle(!toggle)
    }

    return (
      <>
        <div>
          <MoreItemsButton />
          <AddButton
            toggleVar={overlayToggle}
            toggleHandler={setOverlay}
          />

          {toggle && WizardForm}

        </div>
      </>
    )
  }
