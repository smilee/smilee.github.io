import React from "react"
import { useTranslation } from "react-i18next"

const LanguageMenu = props => {
  const { i18n } = useTranslation()

  function handleChange(event) {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <>
      <input
        onChange={e => handleChange(e)}
        type="radio"
        id="english"
        name="language"
        value={"en"}
        style={{ display: "none" }}
      />
      <label htmlFor="english" style={{ marginRight: 8, cursor: "pointer" }}>
        English
      </label>
      <input
        onChange={e => handleChange(e)}
        type="radio"
        id="korean"
        name="language"
        value={"ko"}
        style={{ display: "none" }}
      />
      <label htmlFor="korean" style={{ cursor: "pointer" }}>
        한국어
      </label>
    </>
  )
}

export default LanguageMenu
