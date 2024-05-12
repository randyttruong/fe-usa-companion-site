import React, { useState, useEffect } from 'react'
import '../AddComponentButton/AddComponentButton.scss'

export function EditButton(props) {
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


