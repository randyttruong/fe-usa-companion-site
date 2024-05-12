import React from "react";
import { Input } from './Input'
import { DropDownMenu } from "./DropDownMenu";

export function FormSection(props) {
  const {
    sectionData,
    formInputChange,
    children,
  } = props

  return (
    <>
      <div className={'form-section-header'}>
        {sectionData.sectionId}
      </div>

      {sectionData.inputs.map((inputData) => {
        if (inputData.type === 'text') {
          return (
            <Input
              key={inputData.inputId}
              header={inputData.label}
              formInputChange={formInputChange}
            />)
        } else if (inputData.type === 'dropdown') {
          return (
            <DropDownMenu
              key={inputData.inputId}
              header={inputData.label}
              options={inputData.options}
              formInputChange={formInputChange}
            />
          )
        }

      })
      }
    </>
  )
} 
