import { Input } from "./Input";
import { Form } from './Form'
import { DropDownMenu } from "./DropDownMenu";
import React, { useState } from 'react'
import { FormSection } from './FormSection'
import { CreateButton } from "./CreateButton";

export function AutoForm(props) {
  const {
    jsonData,
    handleInputChange,
    children,
  } = props

  const [formFieldValues, setFormFieldValues] = useState({
    'default': null,
  })

  return (
    <>
      <Form>
        {
          jsonData.sections.map((sectionData) => {
            return (
              <FormSection
                sectionData={sectionData}
                handleInputChange={handleInputChange}
              />
            )
          })
        }
        <CreateButton />
      </Form>
    </>
  )
}
