import React, { useState } from "react"
import { useTranslation } from "react-i18next"

const LanguageMenu = props => {
  const { t, i18n } = useTranslation()

  const [values, setValues] = useState({
    language: "en",
  })

  function handleChange(event) {
    i18n.changeLanguage(event.target.value)

    setValues(oldValues => ({
      ...oldValues
    }))
  }

  return (
    <>
      <input
        onChange={(e) => handleChange(e)}
        type="radio"
        id="english"
        name="language"
        value={"en"}
        defaultChecked
        style={{ display: 'none' }}
      />
      <label htmlFor="english" style={{ marginRight: 8}}>English</label>
      <input
        onChange={(e) => handleChange(e)}
        type="radio"
        id="korean"
        name="language"
        value={"ko"}
        style={{ display: 'none' }}
      />
      <label htmlFor="korean">한국어</label>
    </>
  )
}

export default LanguageMenu
