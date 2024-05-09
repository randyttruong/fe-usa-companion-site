import React, { useState, useEffect } from "react";
import ReactLoading from 'react-loading'
import { ExistingComponentEntry } from "./ExistingComponentEntry";
import { FaCirclePlus, FaAnglesDown } from 'react-icons/fa6'
import './ComponentsTable.scss'

const offset = 5 
/* 
 * MoreButton 
 *
 * This is literally just the button that 
 * fetches more data about the components 
 */
function ShowMoreComponentsButton(props) {
  const { fetchHandler, children } = props
  return (
    <>
      <div
        className={'show-more-button'}
        onClick={fetchHandler}
      >
        <FaAnglesDown />
      </div>
    </>
  )
}

export function ExistingComponentsTable(props) {
  const {
    pageType,
    children
  } = props

  const [componentsList, setComponentsList] = useState([])
  const [visibleComponents, setVisibleComponents] = useState(["huh"]) 
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [pageCount, setPageCount] = useState(null)
  const [pageCounter, setPageCounter] = useState(offset)

  useEffect(() => {
    setVisibleComponents(componentsList.slice(0, pageCounter ))
  }, [componentsList])


  // Initial fetch for the existing components
  useEffect(() => {
    const fetchInit = async () => {
      try {
        setIsLoading(true)

        switch (pageType) {  
          case 0: 
          case 1: 
          case 2: 
          case 3: 
          case 4: 
        }

        const url1 = `http://localhost:8000/get-homepage-components`

        const data = {
          method: "GET", 
          headers: { 
            "Content-Type": "application/json"
          }, 
        }


        // return length of sql table (ie, the number of components 
        // that this page has) in the page count 
        const resp = await fetch(url1, data)
        const fullResp = await resp; 
        const parsedResp = await fullResp.json()

        console.log(parsedResp)
        const length = parsedResp.length
        console.log(length)
        setComponentsList(parsedResp.componentsList)
        console.log('This is componentsList', componentsList)
        setPageCount(Math.ceil(length / 5))
        setIsLoading(false)

      } catch (err) {
        setIsError(true)
        setIsLoading(false)
        console.error('Unable to fetch components', err)
      }
    }

    fetchInit()

  }, [])

  const fetchMoreComponents = () => {
    try {
      setIsLoading(true)
      setPageCounter((pageCounter) => pageCounter + 5)
      console.log('This is counter:', pageCounter)
      setVisibleComponents(visibleComponents.concat(componentsList.slice(pageCounter, pageCounter+5)))
      setIsLoading(false)
    } catch (err) {
      setIsError(true)
      setIsLoading(false)
      console.error('Unable to fetch components', err)
    }
  }

  return (
    <>
      <div className={'component-table'}>
        <ExistingComponentEntry
          className={'table-entry'}
          name={'Name'}
          desc={'Description'}
          type={'Type'}
          start={true}
        />

        {(isLoading) ?
          (<ReactLoading height={'20%'} width={'20%'} />) :
        (
          (isError) ?
            (<p>An error occurred, please refresh the page.</p>) :
            (
              visibleComponents.map((item, key) => {
                const name = item.component_name
                const desc = item.data
                const type = item.component_type

                return (
                  <ExistingComponentEntry
                    className={'table-entry'}
                    name={name}
                    desc={desc}
                    type={type}
                    start={false }
                    key={key}
                  />
                )
              })
            )
        )} 
      {
        (pageCounter < pageCount * 5) ?
          (< ShowMoreComponentsButton
            fetchHandler={fetchMoreComponents}
          />) :
          (<>
          </>)
      }
      </div>
    </>
  )
}
