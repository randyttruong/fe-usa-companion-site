import React from "react";
import { Input } from './Input'
import { DropDownMenu } from "./DropDownMenu";

export function FormSection(props) {
  const {
    sectionData,
    handleInputChange,
    children,
  } = props

  return (
    <>
      <div className={'form-section-container'}>
        <div className={'form-section-header'}>
          {sectionData.sectionId}
        </div>

        {sectionData.inputs.map((inputData) => {
          if (inputData.type === 'text') {
            return (
              <Input
                inputId={inputData.inputId}
                sectionId={sectionData.sectionId}
                header={inputData.label}
                handleInputChange={handleInputChange}
              />)
          } else if (inputData.type === 'dropdown') {
            return (
              <DropDownMenu
                inputId={inputData.inputId}
                sectionId={sectionData.sectionId}
                header={inputData.label}
                options={inputData.options}
                handleInputChange={handleInputChange}
              />
            )
          }

        })
        }
      </div>
    </>
  )
} 
