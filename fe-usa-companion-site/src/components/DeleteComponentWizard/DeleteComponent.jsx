import React, { useState } from 'react'
import '../AddComponentButton/AddComponentButton.scss'

export function DeleteButton(props) {
  const { children } = props

  const onClick = async (event) => {
    const url = `http://localhost:8000/delete-homepage-component/`
    const data = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const resp = await fetch(url, data)

    data = await resp.json()
  }

  // TODO: Add deletion functionality 
  return (
    <>
      <div className={'button-container'}>
        <div className={'add-button'} onClick={onClick}>
          Delete
        </div>
      </div>
    </>
  )

}


