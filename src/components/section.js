import PropTypes from "prop-types"
import React from "react"

const Section = ({ fontColor, title, content }) => {
  const renderListItems = listItems => {
    if (!listItems) return
    return listItems.map(listItem => (
      <li
        style={{
          fontSize: "14px",
          fontWeight: "400",
          color: fontColor,
          lineHeight: "0.5em",
        }}
        key={listItem}
      >
        {listItem}
      </li>
    ))
  }
  const renderContent = () => {
    switch (content.type) {
      case "paragraph":
        return (
          <p
            style={{
              fontSize: `14px`,
              fontWeight: `400`,
              color: fontColor,
              lineHeight: `1.4em`,
            }}
          >
            {content.data}
          </p>
        )
      case "list":
        return (
          <ul style={{ margin: "0", listStyle: "none" }}>
            {renderListItems(content.data)}
          </ul>
        )
      default:
        return null
    }
  }
  return (
    <section style={{ marginBottom: "2em" }}>
      <header>
        <h2
          style={{
            marginBottom: `0.75em`,
            fontSize: `20px`,
            fontWeight: `600`,
            color: fontColor,
            textTransform: `uppercase`,
          }}
        >
          {title}
        </h2>
      </header>
      <main>{renderContent()}</main>
    </section>
  )
}

Section.propTypes = {
  fontColor: PropTypes.string,
  title: PropTypes.string,
  contentType: PropTypes.string,
  content: PropTypes.object,
}

Section.defaultProps = {
  fontColor: `#414242`,
  title: ``,
  content: ``, // type: paragraph, lists
}

export default Section
