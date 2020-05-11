import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

import Image from "../components/image"
import SEO from "../components/seo"
import Section from "../components/section"
import Profile from "../components/profile"
import Introduction from "../components/introduction"
import History from "../components/history"
import "./index.css"

const IndexPage = () => {
  const { t } = useTranslation()

  const [isDefaultPage, setDefaultPage] = useState(true)

  useEffect(() => {
    setDefaultPage(isDefaultPage)
  }, [isDefaultPage])

  return (
    <>
      <SEO title="Home" />
      <div className="container">
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
          <History isDefaultPage={isDefaultPage} />
          <a id="corner" onClick={() => setDefaultPage(!isDefaultPage)} />
        </main>
      </div>
    </>
  )
}

export default IndexPage
