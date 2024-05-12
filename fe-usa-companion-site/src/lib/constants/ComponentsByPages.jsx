/* 
 * componentsByPages.jsx
 *
 * This is a file that maps each of the different 
 * comopnents for each page (enumerated from 
 * 0-3) to their corresponding forms. 
 */

import { HeaderForm } from '../../components/Forms/HeaderForm'
import { CardForm } from '../../components/Forms/CardForm'
import { BodyForm } from '../../components/Forms/BodyForm'
import { MediaForm } from '../../components/Forms/MediaForm'

/*
 * NOTE: 
 * This is the following format for the 
 * pageType enum: 
 * ---------------
 * pageTypes = {  
 *  0: 'Homepage', 
 *  1: 'About Us', 
 *  2: 'Getting Involved', 
 *  3: 'Contact Us', 
 *  4: 'Blog', 
 * }
 */

export const componentsByPages = [
  {
    'header': <HeaderForm />,
    'body': <BodyForm />,
  },
  {
    'header': <HeaderForm />,
    'body': <BodyForm />,
    'profileCard': <CardForm />
  },
  {
    'header': <HeaderForm />,
    'body': <BodyForm />,
  },
  {
    'header': <HeaderForm />,
    'body': <BodyForm />,
  },
]
