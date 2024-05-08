import React from 'react' 
import { FaCirclePlus, FaAnglesDown } from 'react-icons/fa6'
import './NewComponent.scss'


//
// Maybe make a generalized list of components 
// that everyone can use? 
//
// The main phil is that everything that will
// be made will just end up being 
//

/* 
 * toggledForm
 */ 
function toggledForm(props) {    
  const { } = props 

  // TODO: What form data do we need? 

  // TODO: How do I make a drop-down menu? 
  const [formData, setFormData] = useState({
    "componentName": "",
    "componentType": 0, 
  })

  const onSubmit async (e) => {  
    e.preventDefault()  

    useEffect(() => {   
      "": "",
      "": "", 
      "": "", 
    })

    const url = `http://localhost:8000/new-component`;

    const data = {  
      "filler": null, 
    }

    const resp = await fetch(url, data) 

  }

  // Note, at this point, the 
  return (  
    <> 
      <div className={'overlay'}>  
        <div className={'contextMenu'}> 
          <form>  
            <label>
              <input
                placeholder={'Name of new component'}
                type={'text'}
                name={'name'}
              />
            </label>
            <input
              placeholder={'What does this component do?'}
              type={'text'}
            /> 
            <label>
              {/* The rest of this component should just contain 
              component-unique information, such as the fields*/}
            </label>
            <label>
              <input/>
            </label>
          </form> 
        </div>
      </div>
    </> 
  )
}

/* 
 * AddButton
 */ 
function AddButton(props) {  
  const { toggleVar, toggleHandler } = props  

  onClick = (event) => {   
    toggleHandler(!toggleVar) 
  } 

  return (  
    <> 
      {/* TODO: Add hover and on-click stuff */}
      <div className={'add-button'}>  
        <FaCirclePlus /> 
      </div>
    </> 
  )
}

/* 
 * MoreButton 
 */ 
function MoreButton() {  
  const [count, setCount] = useState(0)  

  const countHandler = (e) => {   
    setCount(count + 1)
  }

  return (  
    <> 
      <div onClick={countHandler}>  
        <FaAnglesDown /> 
      </div>
    </> 
  )
}

/* 
 * NewComponent
 */
export function NewComponent() {  
  [overlayToggle, setOverlay] = useState(false)

  toggleHandler = (event) => {  
    setToggle(!toggle)
  }

  return (  
    <>  
      <div>  
        <MoreItemsButton /> 
        <AddButton 
          toggleVar = {overlayToggle} 
          toggleHandler = {setOverlay} 
        /> 

        {toggle && toggledForm}

      </div>
    </> 
  )
}
