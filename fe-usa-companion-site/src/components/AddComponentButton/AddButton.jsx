import React, { useState, useEffect } from "react"
import './AddComponentButton.scss'

export function AddButton(props) {
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


