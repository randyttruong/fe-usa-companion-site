import React, { useState } from 'react'
import { WizardForm } from './AddWizardForm'
import { AddButton } from './AddButton'
import { EditButton } from '../EditComponentWizard/EditComponent'
import { EditWizardForm } from '../EditComponentWizard/EditWizardForm'
import { DeleteButton } from '../DeleteComponentWizard/DeleteComponent'
import './AddComponentButton.scss'
import { DeleteWizardForm } from '../DeleteComponentWizard/DeleteWizardForm'
import { ModeDirections } from '../ModeDirections/ModeDirections'

export function AddComponentButton(props) {
  const {
    pageType,
    globalMode,
    editToggleHandler,
    deleteToggleHandler,
    selectedComp,
  } = props

  const [overlayAddToggle, setAddOverlay] = useState(false)
  const [overlayEditToggle, setEditOverlay] = useState(false)
  const [overlayDeleteToggle, setDeleteOverlay] = useState(false)

  const addToggleHandler = (event) => {
    setAddOverlay(!overlayAddToggle)
  }

  // There are three modes:  
  // modes = {  
  //  0: None, 
  //  1: Edit, 
  //  2: Delete, 
  // }
  //
  return (
    <>
      <div className={'new-component-container'}>
        <AddButton
          toggleVar={overlayAddToggle}
          toggleHandler={addToggleHandler}
        />
        <EditButton
          toggleVar={overlayEditToggle}
          toggleHandler={editToggleHandler}
        />
        <DeleteButton
          toggleVar={overlayDeleteToggle}
          toggleHandler={deleteToggleHandler}
        />
        {
          overlayAddToggle
          &&
          <WizardForm
            pageType={pageType}
            toggleOverlayHandler={addToggleHandler}
          />
        }
      </div>
      <ModeDirections globalMode={globalMode} />
    </>
  )
}
