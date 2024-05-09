import React from "react";
import './ComponentsTable.scss'

function ColumnEntry(props) {
  const { start, children } = props 
  return ( 
      <div className={(start === true) ? 'column-entry-header' : 'column-entry' }><p>{children}</p></div>
  )
}

export function ExistingComponentEntry(props) {
  const {
    name,
    desc,
    type,
    start, 
    children
  } = props

  return (
    <>
      <div className={(start === false)? 'component-table-entry' : 'component-table-header'}>
        <ColumnEntry start={start}>{name}</ColumnEntry>
        <ColumnEntry start={start}>{type}</ColumnEntry>
        <ColumnEntry start={start}>{desc}</ColumnEntry>
      </div>
    </>
  )

}

