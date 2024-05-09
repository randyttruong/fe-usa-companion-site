import React from 'react' 
import { ExistingComponentsTable } from '../components/ExistingComponentsTable/ExistingComponentsTable'
import { NewComponent } from '../components/NewComponentCreationForm/NewComponentCreationForm'

export default function Test() {  
  return(  
    <> 
      <div>
      <ExistingComponentsTable 
        pageType={0}
      /> 
      <NewComponent /> 
      </div> 
    </> 
  )
}
