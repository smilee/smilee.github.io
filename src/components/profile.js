import PropTypes from "prop-types"
import React from "react"
import { FaLinkedin } from "react-icons/fa"

const Profile = ({ image, name, title, email }) => (
  <article
    style={{
      padding: "64px 24px 24px",
      textAlign: "center",
      background: "#d4cfc2",
    }}
  >
    <div style={{ padding: "0 24px" }}>{image}</div>
    <h1
      style={{
        margin: "20px 0 0 0",
        fontSize: "32px",
        fontWeight: "700",
        color: "#414242",
        textTransform: "uppercase",
      }}
    >
      {name}
    </h1>
    <span
      style={{
        margin: "8px 0 0 0",
        fontSize: "16px",
        fontWeight: "400",
        color: "#414242",
      }}
    >
      {title}
    </span>
    <a
      style={{
        display: "block",
        margin: "24px auto 0",
        width: "48px",
        fontSize: "14px",
        color: "#414242",
      }}
      href="http://www.linkedin.com/in/uxplusdev"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FaLinkedin />
    </a>
  </article>
)

Profile.propTypes = {
  image: PropTypes.element,
  name: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
}

Profile.defaultProps = {
  image: ``,
  name: ``,
  title: ``,
  email: ``,
}

export default Profile
