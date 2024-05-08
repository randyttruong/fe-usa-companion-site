import React, { useState, useEffect } from "react";

export function HeaderForm(props) {
  const { setComponentData, children } = props

  const [formData, setFormData] = useState({
    'componentName': '',
    'componentDesc': '',
    'content': '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.componentName
    const desc = e.target.componentDesc
    const content = e.target.content

    const [errorMsg, setErrorMsg] = useState(false)

    if (name === ''
      || desc === ''
      || content === '') {
      setErrorMsg(!errorMsg);
    }

    const final = {
      'componentName': name,
      'componentDesc': desc,
      'content': content,
    }

    setFormData(final)
  }


  return (
    <>
      <form>
        <label>
          <input
            placeholder={'Header Name'}
            type={'text'}
            name={'componentName'}
          />
        </label>
        <label>
          <input
            placeholder={'What does this component do?'}
            type={'componentDesc'}
          />
        </label>
        <label>
          <input
            placeholder={'What do you want your header to say?'}
            type={'text'}
            name={'content'}
          />
        </label>
        <button
          type={'submit'}
          onClick={handleSubmit}
        >
          Create Header
        </button>
      </form>
    </>
  )
}
