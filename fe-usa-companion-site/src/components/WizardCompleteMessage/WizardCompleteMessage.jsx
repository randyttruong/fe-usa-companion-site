import React from "react";
import '../AddFormWizardSegments/AddFormParts.scss'
import '../NextPrevButtons/Buttons.scss'
import { FaCircleCheck } from "react-icons/fa6";

function FancyCloseButton(props) {
  const {
    toggleOverlay,
    toggleOverlayHandler,
  } = props

  return (
    <>
      <div
        className={'next-prev-button'}
        onClick={toggleOverlayHandler}
      >
        Close
      </div>
    </>
  )
}

export function FormComplete(props) {
  const {
    toggleOverlay,
    toggleOverlayHandler,
    children
  } = props

  return (
    <>
      <div className={'overlay-pop-up-menu'}>
        <div className={'overlay-check'}>
          <FaCircleCheck size={64} />
        </div>
        <div>
          Your component was successfully created.
          Relaunch the website to see the effect.
        </div>
        <div className={'fancy-close-bar'}>
          <FancyCloseButton
            toggleOverlayHandler={toggleOverlayHandler}
          />
        </div>
      </div>
    </>
  )
}
