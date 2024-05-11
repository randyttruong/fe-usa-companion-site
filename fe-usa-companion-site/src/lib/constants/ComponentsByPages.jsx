import { HeaderForm } from '../../components/forms/HeaderForm'
import { CardForm } from '../../components/forms/CardForm'
import { BodyForm } from '../../components/forms/BodyForm'
import { MediaForm } from '../../components/forms/MediaForm'

// TODO: Make fields for this? 
const headerFields = { 
  'name': 'text',
  'description': 'text', 
  'content': 'text', 
  'style': [1,2,3],
}

const bodyFields = { 
  'name': 'text', 
  'description': 'text', 
  'content': 'text', 
  'style': [1,2,3]
}

export const componentsByPages = [
  {
    'header': <HeaderForm />,
    'body': <BodyForm/> ,
  },
  { 
    'header': <HeaderForm/>, 
    'body': <BodyForm/>, 
  },
  {
    'header': <HeaderForm/>, 
    'body': <BodyForm/>, 
  },
  {
    'header': <HeaderForm/>, 
    'body': <BodyForm/>,
  },
]
