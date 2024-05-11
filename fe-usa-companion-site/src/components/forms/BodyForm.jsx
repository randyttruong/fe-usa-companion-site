import React, { useState, useEffect } from "react";

/* 
 * TODO: Styling
  */
export function BodyForm(props) {
  const { setComponentData, children } = props

  const [formData, setFormData] = useState({
    'componentName': '',
    'componentDesc': '',
    'content': '',
  })

  const [errorMsg, setErrorMsg] = useState(false);

const submitHandler = (e) => {
    e.preventDefault()

    const name = e.target.componentName;
    const desc = e.target.componentDesc;
    const content = e.target.content;

    if (name === ''
      || desc === ''
      || content === '') {
      // TODO: Where do I handle this? 
      setErrorMsg(!errorMsg)
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
            placeholder={'Body Name'}
            type={'text'}
            name={'componentName'}
          />
        </label>
        <label>
          <input
            placeholder={'What does this paragraph do?'}
            type={'componentDesc'}
          />
        </label>
        <label>
          <input
            placeholder={'What do you want your paragraph to say?'}
            type={'text'}
            name={'content'}
          />
        </label>
        <button
          type={'submit'}
          onClick={submitHandler}
        >
          Create Body
        </button>
      </form>
    </>
  )
}
