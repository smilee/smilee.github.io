import PropTypes from "prop-types"
import React from "react"

const Organization = ({ fontColor, organization, dates, title, events }) => {
  const renderEvents = () => {
    if (!events) return
    return events.map(event => {
      const renderEventRoles = roles => {
        if (!roles) return
        return event.roles.map(role => (
          <li
            style={{
              marginBottom: "0",
              fontSize: "14px",
              fontWeight: "300",
              lineHeight: "1.4em",
              color: fontColor,
            }}
            key={`${event}-${role}`}
          >
            {role}
          </li>
        ))
      }
      return (
        <section key={event.title}>
          <h4
            style={{
              marginBottom: "0.25em",
              fontSize: "15px",
              fontWeight: "400",
              color: fontColor,
            }}
          >
            {event.title}, {event.date}
          </h4>
          <ul style={{ listStyle: "circle", marginBottom: "6px" }}>
            {renderEventRoles(event.roles)}
          </ul>
        </section>
      )
    })
  }
  return (
    <article style={{ marginBottom: "1.4em" }}>
      <header style={{ marginBottom: "0.5em" }}>
        <h3
          style={{
            marginBottom: "0.25em",
            fontSize: "16px",
            fontWeight: "600",
            color: fontColor,
            textTransform: "uppercase",
          }}
        >
          {organization} ∙ {title}
        </h3>
        <span
          style={{
            display: "block",
            fontSize: "13px",
            fontWeight: "300",
            lineHeight: "1.4em",
            color: "#80786d",
          }}
        >
          {dates}
        </span>
      </header>
      <main>{renderEvents()}</main>
    </article>
  )
}

Organization.propTypes = {
  fontColor: PropTypes.string,
  organization: PropTypes.string,
  dates: PropTypes.string,
  title: PropTypes.string,
  events: PropTypes.array,
}

Organization.defaultProps = {
  fontColor: "#414242",
  organization: "",
  dates: "",
  title: "",
  events: [],
}

export default Organization
