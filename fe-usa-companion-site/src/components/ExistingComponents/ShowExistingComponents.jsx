import React, { useState } from "react";
import ReactLoading from 'react-loading'
import { ExistingComponentEntry } from "./ComponentEntry";


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

export function ShowExistingComponents(props) {
  const {
    pageType,
    children
  } = props

  const [componentsList, setComponentsList] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const [pageCounter, setPageCounter] = useState(1)

  const [pageCount, setPageCount] = useState(null)

  // Initial fetch for the existing components
  useEffect(() => {
    const fetchInit = async () => {
      try {
        setIsLoading(true)

        const url1 = `http://localhost:8000/get-components`
        const data1 = {
          'pageType': pageType,
          'pageIndex': 1,
        }

        // return length of sql table (ie, the number of components 
        // that this page has) in the page count 
        const resp1 = await fetch(url1, data1)

        const respData = resp1.json()
        const length = respData.length
        const dbComponentList = respData.componentList

        setComponentsList(dbComponentList)
        setPageCount(length / 5) // TODO: Handle fetching data, show 5 items per page 
        setPageCounter(pageCount + 1)
        setIsLoading(false)
      } catch (err) {
        setError(true)
        setIsLoading(false)
        console.error('Unable to fetch components', err)
      }
    }

    fetchInit()

  }, [])

  const fetchMoreComponents = async () => {
    try {
      setIsLoading(true)

      const url = `http://localhost:8000/get-components`
      const data = {
        'pageType': pageType,
        'pageIndex': pageCounter,
      }

      const resp = await fetch(url, data)
      const respData = resp.json()

      const dbComponentList = respData.componentList

      setComponentsList([...componentsList + dbComponentList])
      setIsLoading(false)
      setPageCounter(pageCount + 1)
    } catch (err) {
      setError(true)
      setIsLoading(false)
      console.error('Unable to fetch components', err)
    }
  }

  return (
    <>
      {(isLoading) ?
        (<ReactLoading height={'20%'} width={'20%'} />) :
        (
          (isError) ?
            (<p>An error occurred, please refresh the page.</p>) :
            (
              componentsList.map((item, key) => {
                const name = item.name
                const desc = item.desc
                const type = item.type

                return (
                  <ExistingComponentEntry
                    name={name}
                    desc={desc}
                    type={type}
                    key={key}
                  />
                )
              })
            )
        )}
      {
        (pageCounter < pageCount) ?
          (< ShowMoreComponentsButton
            fetchHandler={fetchMoreComponents}
          />) :
          (<>
          </>)
      }
    </>
  )
}
