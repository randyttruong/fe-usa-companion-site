import React from "react";

export function ErrorStep(props) {
  const { children } = props
  return (
    <>
      <p className={'error-message'}>
        Something went wrong. Please
        close this window and try again.
      </p>
    </>
  )
}
