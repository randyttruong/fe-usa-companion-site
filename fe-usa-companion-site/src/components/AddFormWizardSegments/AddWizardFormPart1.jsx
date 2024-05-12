import React, { useState, useEffect } from "react";
import { ErrorStep } from "../WizardErrorMessage/WizardErrorMessage.jsx";
import { NextPrevBar } from '../NextPrevButtons/NextPrevBar.jsx';
import { CloseButtonBar } from '../WizardCloseButton/CloseButton.jsx';
import { componentTypes } from '../../lib/constants/ComponentTypes.jsx'

import './AddFormParts.scss'

const debug = 1;

function ComponentCardEntry(props) {
  const {
    id,
    componentName,
    componentDescription,
    selectedItem,
    setSelectedItemName,
    onClickFunction,
  } = props

  const [isSelected, setIsSelected] = useState(false)

  const onClickHandler = () => {
    if (selectedItem !== id) {
      onClickFunction(id)
      setSelectedItemName(componentName)
    } else {
      onClickFunction(-1)
      setSelectedItemName('')
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
        <h1> {id}</h1>
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
    formValues,
    formValueHandler,
    children
  } = props

  const [formData, setFormData] = useState({
  })
  const [selected, setSelected] = useState('');            // Is something selected? 
  const [selectedItem, setSelectedItem] = useState(-1);    // What is the type of this item? 
  const [selectedItemName, setSelectedItemName] = useState(-1);    // What is the type of this item? 
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

  useEffect(() => {
    const data = {
      'pageType': pageType,
      'componentType': selectedItem,
      'componentName': selectedItemName,
      'set': 1,
    }

    formValueHandler(data)
  }, [selectedItem])

  useEffect(() => {
  }, [])

  return (
    <>
      <div className={'overlay-pop-up-menu'}>
        <CloseButtonBar
          toggleOverlay={toggleOverlay}
          toggleOverlayHandler={toggleOverlayHandler}
        />
        <div className={'pop-up-content'}>
          <div className={'pop-up-dirs'}>
            Please select a component from below.
          </div>
          {toggleError && <ErrorStep />}
          {
            componentList.map((item, index) => {
              const name = item.name
              const desc = item.description
              return (
                <ComponentCardEntry
                  id={index}
                  componentName={name}
                  selectedItem={selectedItem}
                  setSelectedItemName={setSelectedItemName}
                  componentDescription={desc}
                  onClickFunction={setSelectedItem}
                />
              )
            })
          }
          {
            (debug === 1) &&
            (<>
              <p>The page item is {formValues['pageType']}</p>
              <p>The selected item is {formValues['componentType']}</p>
            </>)
          }
        </div>
        {
          (selectedItem >= 0)
          &&
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
