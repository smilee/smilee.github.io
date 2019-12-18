import React from "react"
import { useTranslation } from "react-i18next"

import Image from "../components/image"
import SEO from "../components/seo"
import Section from "../components/section"
import Profile from "../components/profile"
import Introduction from "../components/introduction"
import History from "../components/history"
import "./index.css"

const IndexPage = () => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <SEO title="Home" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          borderTop: "8px solid #59625a",
        }}
      >
        <aside id="aside">
          <Profile
            image={<Image />}
            name={t("profile.name")}
            title={t("profile.title")}
            email={t("profile.email")}
          />
          <Introduction
            summary={
              <Section
                fontColor="#f0ecda"
                title={t("introduction.summary.title")}
                content={{
                  type: "paragraph",
                  data: t("introduction.summary.content"),
                }}
              />
            }
            skills={
              <Section
                fontColor="#f0ecda"
                title={t("introduction.skills.title")}
                content={{
                  type: "list",
                  data: t("introduction.skills.content"),
                }}
              />
            }
            language={
              <Section
                fontColor="#f0ecda"
                title={t("introduction.languages.title")}
                content={{
                  type: "list",
                  data: t("introduction.languages.content"),
                }}
              />
            }
          />
        </aside>
        <main id="main">
          <History />
        </main>
      </div>
    </>
  )
}

export default IndexPage
