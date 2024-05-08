import React, { useState } from 'react'

const uploadEnum = {
  0: "image",
  1: "video",
}

export function MediaForm(props) {
  const { children } = props
  const [uploadType, setUploadType] = useState(0)

  return (
    <>
      <form>
        <label>
          <input
            placeholder={'Media Name'}
          />
        </label>
        <label>
          <input
            placeholder={'Type of Media'}
            type={'text'}
          />
        </label>
        <label>
          <input
            placeholder={'What does this media do?'}
            type={'text'}
            name={'componentDesc'}
          />
        </label>
        <label>
          <input
            placeholder={''}
            type={(content === 0) ? 'file' : 'url'}
            name={'content'}
          />
        </label>
      </form>
    </>
  )
}
