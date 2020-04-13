import React from "react"

import Layout from "../Layout"
import ProjectCover from "../projects/ProjectCover"
import ProjectDescription from "../projects/ProjectDescription"

export default ({ pageContext }) => {
  const {
    Title,
    Subtitle,
    Cover,
    Description,
    ProjectLink,
    GitHubLink,
  } = pageContext.project

  return (
    <Layout page="project-page">
      <ProjectCover title={Title} subtitle={Subtitle} cover={Cover} />
      <section className="section project-information">
        <div className="project-detail__links">
          <a
            href={ProjectLink}
            rel="nofollow"
            className="button button--primary project-detail__launch-button"
          >
            <div className="button--primary__content">Launch project</div>
          </a>
          {GitHubLink && (
            <a
              href={GitHubLink}
              rel="nofollow"
              className="button button--secondary project-detail__github-button"
            >
              View on GitHub
            </a>
          )}
        </div>
        <ProjectDescription description={Description} />
      </section>
    </Layout>
  )
}
