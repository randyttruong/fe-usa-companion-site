import React from "react";
import '../AddFormWizardSegments/AddFormParts.scss'

export function DeleteWizardForm(props) {
  const {
    pageType,
    toggleOverlay,
    toggleOverlayHandler,
    componentsList,
    children
  } = props


  const renderSteps = () => {
    return (
      <>
      </>
    )
  }

  return (
    <>
      <div className={'pop-up-menu-overlay'}>
      </div>
    </>
  )
}
