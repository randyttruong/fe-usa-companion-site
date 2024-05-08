# Future Entrepreneurs USA Companion Website 
## TODO 

### Frontend 
- [X] Functionality for loading existing component metadata 
  - `/fe-usa-companion-site/src/components/ExistingComponents/`
- [X] Functionality for Form Wizard for new component creation 
  - `/src/components/NewComponent` - Implements the form wizard 
    - Utilizes `/fe-usa-companion-site/src/components/forms/` - Contains all components for different steps of the form wizard  
    - Utilizes `/fe-usa-companion-site/src/components/NextPrevButtons/` -  Adds functionality for switching between different pages of the wizard 
    - Utilizes `/fe-usa-companion-site/src/components/SubmissionFormComponents/` - Adds functionality for confirming new component metadata and sends req 
- [ ] Functionality for saving component history (literally just a save button)
- [ ] Integration 
  - [ ] Integrate `/fe-usa-companion-site/src/components/ExistingComponents/` to subpages 
  - [ ] Integrate `/fe-usa-companion-site/src/components/NewComponent/` to subpages 
- [ ] Add styling to fontend 
  - [ ] Styling for literally everything 

### Backend 
- [X] Added a `SQLite 3` database to save all component data locally 
- [ ] Create helper functions for transforming component metadata -> actual components
  - `/express-backend/src/api/create-page-components/home-components.js` 
    - [X] `createHeader()` - creates a header element
    - [X] `createBody()` - creates a body element 
    - [ ] `createMediaBox()` - creates a media element 
  - [ ] About Us Helper Functions 
  - [ ] Getting Involved Helper Functions 

## Description
This is a companion website that is meant to replace 
Wix, that has been built for Future Entrepreneurs USA. 

This is a robust solution for creating and editing the 
visual aspects of a website without jeopardizing visual
quality, contradicting theme, etc. Additionally, 
the companion website features a smart auto-save pipeline 
that enables FE USA the ability to actually store previous 
versions of their website in case they want to use a 
"time machine". 

## Tech Stack 
### Frontend  
- `TypeScript + React` - Original website 
- `JavaScript + Vite + React` Companion site 

### Backend 
- `Express` - Routing framework for companion site 
- `SQLite 3` - Localized database 

## Dependencies  
- `node`
- `npm` (Node Package Manager)

## Tutorial on how to run the Code 
```
npm i 
```

```
npm run dev
```


