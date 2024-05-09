import { componentTypes } from '../../lib/constants/componentTypes.jsx'
import React, { useState, useEffect } from "react";
import { ErrorStep } from './ErrorStep.jsx';
import { NextPrevBar } from '../NextPrevButtons/NextPrevBar.jsx';
import './ComponentSelectionForm.scss'
import { CloseButtonBar } from './CloseButton.jsx'

function ComponentCardEntry(props) {
  const {
    id, 
    componentName,
    componentDescription,
    selectedItem, 
    onClickFunction,
  } = props

  const [isSelected, setIsSelected] = useState(false)

  const onClickHandler = () => {
    if (selectedItem !== id) {
      onClickFunction(id)
    } else { 
      onClickFunction(-1)
    }
  }

  return (
    <>
      <div
        onClick={onClickHandler}
        className={
          (selectedItem === id) ?
            'selected-entry' :
            'unselected-entry'}
      >
        <h1> {componentName} </h1>
        <h2> {componentDescription} </h2>
      </div>
    </>
  )
}

export function ComponentSelectionForm(props) {
  const {
    pageType,
    toggleOverlay, 
    toggleOverlayHandler, 
    prevHandler,
    nextHandler,
    values,
    children
  } = props

  const [formData, setFormData] = useState({
  })
  const [selected, setSelected] = useState('');            // Is something selected? 
  const [selectedItem, setSelectedItem] = useState(-1);    // What is the type of this item? 
  const [componentList, setComponentList] = useState([])
  const [toggleError, setToggleError] = useState(false)

  // use useEffect to load up 
  // all of the different possibilities 
  useEffect(() => {
    if (!(pageType in componentTypes)) {
      setToggleError(!toggleError)
    } else {
      const entry = componentTypes[pageType]
      setComponentList(entry.components)
    }
  }, [])


  // TODO: Set onClick event for whenever 
  // the client selects a particular component 
  // that they want to use. 
  //
  // Expected Behavior: 
  // - User clicks the component that they want 
  // - The component that they want is selected (ie, 
  // outlined)

  return (
    <>
      <div className={'overlay-pop-up-menu'}> 
        <CloseButtonBar 
          toggleOverlay={toggleOverlay}
          toggleOverlayHandler={toggleOverlayHandler}
        /> 
        <div className={'pop-up-content'}>
        { toggleError && <ErrorStep /> }
        { 
          componentList.map((item, index) => {
            const name = item.name
            const desc = item.description
            return (
              <ComponentCardEntry
                id={index}
                componentName={name}
                selectedItem={selectedItem}
                componentDescription={desc}
                onClickFunction={setSelectedItem}
              />
            )
          })
        } 
        </div>
        {(selectedItem >= 0) && 
        <NextPrevBar 
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          first={true}
          end={false}
        />
        } 
      </div>
    </>
  )
}
