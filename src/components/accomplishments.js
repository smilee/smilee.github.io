import PropTypes from "prop-types"
import React from "react"
import { useTranslation } from "react-i18next"

import Section from "../components/section"
import Publication from "../components/publication"
import Organization from "../components/organization"
import Presentation from "../components/presentation"

const Accomplishments = () => {
  const { t } = useTranslation()

  return (
    <article id="accomplishments">
      <Section
        title={t("history.publication.title")}
        content={{
          type: "list",
          data: [
            <Publication
              title={t(`history.publication.content.${0}.title`)}
              date={t(`history.publication.content.${0}.date`)}
              publication={t(`history.publication.content.${0}.publication`)}
              publisher={t(`history.publication.content.${0}.publisher`)}
            />,
            <Publication
              title={t(`history.publication.content.${1}.title`)}
              date={t(`history.publication.content.${1}.date`)}
              publication={t(`history.publication.content.${1}.publication`)}
              publisher={t(`history.publication.content.${1}.publisher`)}
            />,
          ],
        }}
      />
      <Section
        title={t("history.organization.title")}
        content={{
          type: "list",
          data: [
            <Organization
              organization={t(`history.organization.content.${0}.organization`)}
              dates={t(`history.organization.content.${0}.dates`)}
              title={t(`history.organization.content.${0}.title`)}
              events={t(`history.organization.content.${0}.events`)}
            />,
          ],
        }}
      />
      <Section
        title={t("history.presentation.title")}
        content={{
          type: "list",
          data: [
            <Presentation
              date={t(`history.presentation.content.${0}.date`)}
              host={t(`history.presentation.content.${0}.host`)}
              title={t(`history.presentation.content.${0}.title`)}
              subject={t(`history.presentation.content.${0}.subject`)}
            />,
            <Presentation
              date={t(`history.presentation.content.${1}.date`)}
              host={t(`history.presentation.content.${1}.host`)}
              title={t(`history.presentation.content.${1}.title`)}
              subject={t(`history.presentation.content.${1}.subject`)}
            />,
            <Presentation
              date={t(`history.presentation.content.${2}.date`)}
              host={t(`history.presentation.content.${2}.host`)}
              title={t(`history.presentation.content.${2}.title`)}
              subject={t(`history.presentation.content.${2}.subject`)}
            />,
            <Presentation
              date={t(`history.presentation.content.${3}.date`)}
              host={t(`history.presentation.content.${3}.host`)}
              title={t(`history.presentation.content.${3}.title`)}
              subject={t(`history.presentation.content.${3}.subject`)}
            />,
            <Presentation
              date={t(`history.presentation.content.${4}.date`)}
              host={t(`history.presentation.content.${4}.host`)}
              title={t(`history.presentation.content.${4}.title`)}
              subject={t(`history.presentation.content.${4}.subject`)}
            />,
            <Presentation
              date={t(`history.presentation.content.${5}.date`)}
              host={t(`history.presentation.content.${5}.host`)}
              title={t(`history.presentation.content.${5}.title`)}
              subject={t(`history.presentation.content.${5}.subject`)}
            />,
          ],
        }}
      />
    </article>
  )
}

Accomplishments.propTypes = {}

Accomplishments.defaultProps = {}

export default Accomplishments
