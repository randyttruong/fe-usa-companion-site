import React from "react";

export function ExistingComponentEntry(props) {
  const {
    name,
    desc,
    type,
    children
  } = props

  return (
    <>
      <div className={'component-table-entry'}>
        <h1>{name}</h1>
        <p>{type}</p>
        <p>{desc}</p>
      </div>
    </>
  )

}

