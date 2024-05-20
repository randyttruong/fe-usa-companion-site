import React from "react";

export function ModeDirections(props) {
  const { globalMode } = props

  const renderDirs = () => {
    switch (globalMode) {
      case 0:
        return (
          <>
          </>
        )

      case 1:
        return (
          <>
            <p>
              Please select a component to edit.
            </p>
          </>
        )

      case 2:
        return (
          <>
            <p>
              Please select a component to delete.
            </p>
          </>
        )
    }
  }
  return (
    <>
      {renderDirs()}
    </>
  )
}
