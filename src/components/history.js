import PropTypes from "prop-types"
import React from "react"
import { useTranslation } from "react-i18next"

import Section from "../components/section"
import Experience from "../components/experience"
import Education from "../components/education"

const History = () => {
  const { t } = useTranslation()

  return (
    <article>
      <Section
        title={t("history.experience.title")}
        content={{
          type: "list",
          data: [
            <Experience
              company={t(`history.experience.content.${0}.company`)}
              title={t(`history.experience.content.${0}.title`)}
              dates={t(`history.experience.content.${0}.dates`)}
              location={t(`history.experience.content.${0}.location`)}
              projects={[
                {
                  title: t(
                    `history.experience.content.${0}.projects.${0}.title`
                  ),
                  description: t(
                    `history.experience.content.${0}.projects.${0}.description`
                  ),
                  roles: t(
                    `history.experience.content.${0}.projects.${0}.roles`
                  ),
                },
                {
                  title: t(
                    `history.experience.content.${0}.projects.${1}.title`
                  ),
                  description: t(
                    `history.experience.content.${0}.projects.${1}.description`
                  ),
                },
              ]}
            />,
            <Experience
              company={t(`history.experience.content.${1}.company`)}
              title={t(`history.experience.content.${1}.title`)}
              dates={t(`history.experience.content.${1}.dates`)}
              location={t(`history.experience.content.${1}.location`)}
              projects={[
                {
                  title: t(
                    `history.experience.content.${1}.projects.${0}.title`
                  ),
                  description: t(
                    `history.experience.content.${1}.projects.${0}.description`
                  ),
                  roles: t(
                    `history.experience.content.${1}.projects.${0}.roles`
                  ),
                },
                {
                  title: t(
                    `history.experience.content.${1}.projects.${1}.title`
                  ),
                  description: t(
                    `history.experience.content.${1}.projects.${1}.description`
                  ),
                  roles: t(
                    `history.experience.content.${1}.projects.${1}.roles`
                  ),
                },
              ]}
            />,
            <Experience
              company={t(`history.experience.content.${2}.company`)}
              title={t(`history.experience.content.${2}.title`)}
              dates={t(`history.experience.content.${2}.dates`)}
              location={t(`history.experience.content.${2}.location`)}
              projects={[
                {
                  title: t(
                    `history.experience.content.${2}.projects.${0}.title`
                  ),
                  description: t(
                    `history.experience.content.${2}.projects.${0}.description`
                  ),
                  roles: t(
                    `history.experience.content.${2}.projects.${0}.roles`
                  ),
                },
              ]}
            />,
          ],
        }}
      />
      <Section
        title={t("history.education.title")}
        content={{
          type: "list",
          data: [
            <Education
              school={t(`history.education.content.${0}.school`)}
              degree={t(`history.education.content.${0}.degree`)}
              department={t(`history.education.content.${0}.department`)}
              years={t(`history.education.content.${0}.years`)}
              description={t(`history.education.content.${0}.description`)}
            />,
            <Education
              school={t(`history.education.content.${1}.school`)}
              degree={t(`history.education.content.${1}.degree`)}
              department={t(`history.education.content.${1}.department`)}
              years={t(`history.education.content.${1}.years`)}
              description={t(`history.education.content.${1}.description`)}
            />,
            <Education
              school={t(`history.education.content.${2}.school`)}
              degree={t(`history.education.content.${2}.degree`)}
              department={t(`history.education.content.${2}.department`)}
              years={t(`history.education.content.${2}.years`)}
              description={t(`history.education.content.${2}.description`)}
            />,
          ],
        }}
      />
    </article>
  )
}

History.propTypes = {
  experience: PropTypes.element,
  education: PropTypes.element,
}

History.defaultProps = {
  experience: ``,
  education: ``,
}

export default History
