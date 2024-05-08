import React, { useState } from "react";

export function CardForm(props) {
  const { setComponentData, children } = props

  const [formData, setFormData] = useState({
    'componentName': '',
    'componentDesc': '',
    'content1': '',
    'content2': '',
  })
  const [errorMsg, setErrorMsg] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()

    const name = e.target.componentName;
    const desc = e.target.componentDesc;
    const content1 = e.target.content1;
    const content2 = e.target.content1;

    if (name === ''
      || desc === ''
      || content1 === ''
      || content2 === '') {
      setErrorMsg(!errorMsg)
    }

    const final = {
      'componentName': name,
      'componentDesc': desc,
      'content1': content1,
      'content2': content2,
    }

    setFormData(final)
  }

  return (
    <>
      <form>
        <label>
          <input
            placeholder={'Card Name'}
            type={'text'}
            name={'componentName'}
          />
        </label>
        <label>
          <input
            placeholder={'What does this card do?'}
            type={'text'}
            name={'componentDesc'}
          />
        </label>
        <label>
          <input
            placeholder={'What do you want your card\'s header to say?'}
            type={'text'}
            name={'content1'}
          />
        </label>
        <label>
          <input
            placeholder={'What do you want your card\'s body to say?'}
            type={'text'}
            name={'content2'}
          />
        </label>
        <button
          type={'submit'}
          onClick={submitHandler}
        >
          Create Card
        </button>
      </form>
    </>
  )
} 
