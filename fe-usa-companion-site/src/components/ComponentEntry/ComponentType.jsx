import componentTypes from '../../lib/constants/componentTypes.jsx'
import React, { useState, useEffect } from "react";
import { ErrorStep } from './ErrorStep.jsx';

function ComponentCardEntry(props) {
  const {
    componentName,
    componentDescription,
    onClickFunction,
    isSelected,
  } = props

  const onClickHandler = () => {
    onClickFunction(componentName)
  }

  return (
    <>
      <div
        onClick={onClickHandler}
        className={
          (isSelected === componentName) ?
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
  const { pageType, prev, next, children } = props
  const [formData, setFormData] = useState({
  })

  const [selected, setSelected] = useState("");

  const [componentList, setComponentList] = useState([])

  // use useEffect to load up 
  // all of the different possibilities 
  useEffect(() => {
    if (!(pageType in componentTypes)) {
      return <ErrorStep />;
    } else {
      const entry = componentTypes[pageType]
      setComponentList(entry)
    }
  })


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
      <div className={'component-list-grid'}>
        {
          componentList.map((item, key) => {
            const name = item.name
            const desc = item.description
            return (
              <ComponentCardEntry
                selected={selected}
                key={key}
                componentName={name}
                componentDescription={desc}
                onClickFunction={setSelected}
              />
            )
          })
        }
      </div>
    </>
  )
}
