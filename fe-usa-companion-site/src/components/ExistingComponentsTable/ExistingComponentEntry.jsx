import React, { useState, useEffect } from "react";
import './ComponentsTable.scss'
import { FaRegCircleQuestion } from "react-icons/fa6";


function ColumnEntry(props) {
  const { start, children } = props
  return (
    <div className={(start === true) ? 'column-entry-header' : 'column-entry'}><p>{children}</p></div>
  )
}

export function ExistingComponentEntry(props) {
  const {
    name,
    desc,
    type,
    start,
    empty,
    globalMode,
    selectedComp,
    setSelectedComp,
    children
  } = props

  // useEffect(() => {
  //   setSelectedComp({ 'default': null })
  // }, [])

  const [localSelectedComp, setLocalSelectedComp] = useState({ 'default': 1 });

  const same = () => {
    if (localSelectedComp['default'] === 1) {
      return false;
    }
    if (selectedComp['name'] === localSelectedComp['name']
      && selectedComp['desc'] === localSelectedComp['desc']
      && selectedComp['type'] === localSelectedComp['type']) {
      return true;
    }
    return false;
  }

  const selectedCompHandler = () => {
    // Base Case 1: Not in selection mode 
    if (globalMode !== 1 && globalMode !== 2) {
      return
    }

    if (empty === true || start === true) {
      return
    }

    if (same() === true) {
      console.log("we are unselecting this one ")
      setLocalSelectedComp({ 'default': 1 })
      setSelectedComp({ 'default': 1 })
      return;
    }



    setLocalSelectedComp({
      'default': 0,
      'name': name,
      'desc': desc,
      'type': type
    })

    setSelectedComp(localSelectedComp)
  }


  const renderEntry = () => {
    if (empty) {
      return (
        <div className={'component-table-entry-empty'}>
          <ColumnEntry start={true}>
            <div className={'empty-icon'}>
              <FaRegCircleQuestion size={64} />
            </div>
            Table is empty, please add a component.
          </ColumnEntry>
        </div>
      )
    } else {
      return (
        <div className={(start === true)
          ? 'component-table-header' :
          (same() !== true) ?
            'component-table-entry' :
            'component-table-selected'}
          onClick={selectedCompHandler}>
          <ColumnEntry start={start}>{name}</ColumnEntry>
          <ColumnEntry start={start}>{type}</ColumnEntry>
          <ColumnEntry start={start}>{desc}</ColumnEntry>
        </div >

      )
    }
  }

  return (
    <>
      {
        renderEntry()
      }
    </>
  )

}

