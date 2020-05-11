import PropTypes from "prop-types"
import React from "react"

const Experience = ({
  fontColor,
  company,
  title,
  dates,
  location,
  projects,
}) => {
  const renderProjects = () => {
    if (!projects) return
    return projects.map(project => {
      const renderProjectRoles = roles => {
        if (!roles) return
        return roles.map(role => (
          <li
            style={{
              marginBottom: "0",
              fontSize: "14px",
              fontWeight: "300",
              lineHeight: "1.4em",
              color: fontColor,
            }}
            key={`${project}-${role}`}
          >
            {role}
          </li>
        ))
      }
      return (
        <section key={project.title}>
          <h4
            style={{
              marginBottom: "0.25em",
              fontSize: "15px",
              fontWeight: "400",
              color: fontColor,
            }}
          >
            {project.title}, {project.description}
          </h4>
          <ul style={{ listStyle: "circle", marginBottom: "6px" }}>
            {renderProjectRoles(project.roles)}
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
          {company} ∙ {title}
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
        <span
          style={{
            display: "block",
            fontSize: "13px",
            fontWeight: "300",
            lineHeight: "1.4em",
            color: "#80786d",
          }}
        >
          {location}
        </span>
      </header>
      <main>{renderProjects()}</main>
    </article>
  )
}

Experience.propTypes = {
  fontColor: PropTypes.string,
  company: PropTypes.string,
  title: PropTypes.string,
  dates: PropTypes.string,
  location: PropTypes.string,
  projects: PropTypes.array,
}

Experience.defaultProps = {
  fontColor: "#414242",
  company: ``,
  title: ``,
  dates: ``,
  location: ``,
  projects: [],
}

export default Experience
