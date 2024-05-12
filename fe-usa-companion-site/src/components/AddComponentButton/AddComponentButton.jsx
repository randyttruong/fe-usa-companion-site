import React, { useState } from 'react'
import { WizardForm } from './AddWizardForm'
import { AddButton } from './AddButton'
import { EditButton } from '../EditComponentWizard/EditComponent'
import { DeleteButton } from '../DeleteComponentWizard/DeleteComponent'
import './AddComponentButton.scss'

export function AddComponentButton(props) {
  const { pageType } = props

  const [overlayToggle, setOverlay] = useState(false)

  const toggleHandler = (event) => {
    setOverlay(!overlayToggle)
  }

  return (
    <>
      <div className={'new-component-container'}>
        <AddButton
          toggleVar={overlayToggle}
          toggleHandler={toggleHandler}
        />
        <EditButton />
        <DeleteButton />
        {
          overlayToggle
          &&
          <WizardForm
            pageType={pageType}
            toggleOverlayHandler={toggleHandler}
          />
        }
      </div>
    </>
  )
}
