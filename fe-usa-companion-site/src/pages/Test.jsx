import React from 'react'
import { ExistingComponentsTable } from '../components/ExistingComponentsTable/ExistingComponentsTable'
import { AddComponentButton } from '../components/AddComponentButton/AddComponentButton'

export default function Test() {
  return (
    <>
      <div>
        <ExistingComponentsTable pageType={0} />
        <AddComponentButton pageType={0} />
      </div>
    </>
  )
}
