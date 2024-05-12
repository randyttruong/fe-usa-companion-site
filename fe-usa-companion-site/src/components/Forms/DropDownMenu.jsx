import React, { useState } from "react";
import './Form.scss'

export function DropDownMenu(props) {
  const {
    header,
    options,
    children,
  } = props

  const [menuValue, setMenuValue] = useState({
    'filler': null,
  });


  return (
    <>
      <div className={'form-input'}>
        <div className={'form-input-header'}>
          {header}
        </div>

        <select
          className={'form-input-select'}
          value={menuValue}
          onChange={menuValue}
        >
          {
            options.map((e, i) => {
              return (
                <>
                  <option key={i} value={e}>{e}</option>
                </>
              )
            })
          }
        </select>
      </div>
    </>
  )
}
