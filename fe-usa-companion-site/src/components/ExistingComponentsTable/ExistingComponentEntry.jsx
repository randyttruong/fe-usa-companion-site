import React from "react";
import './ComponentsTable.scss'
import { FaRegCircleQuestion } from "react-icons/fa6";


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
    empty, 
    children
  } = props

  const renderEntry = () => {  
    if (empty) {
      return (  
        <div className={'component-table-entry-empty'}> 
          <ColumnEntry start={true}> 
            <div className={'empty-icon'}>
              <FaRegCircleQuestion  size={64}/>
             </div>
            Table is empty, please add a component. 
          </ColumnEntry>
        </div> 
      )
    } else { 
      return ( 
        <div className={(start === false)? 'component-table-entry' : 'component-table-header'}>
          <ColumnEntry start={start}>{name}</ColumnEntry>
          <ColumnEntry start={start}>{type}</ColumnEntry>
          <ColumnEntry start={start}>{desc}</ColumnEntry>
        </div>

      )
    }
  }

  return (
    <>
      { 
        renderEntry()
      } 
    </>
  )

}

