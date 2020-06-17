import React from "react"

import Layout from "../Layout"
import ProjectCover from "../projects/ProjectCover"
import ProjectDescription from "../projects/ProjectDescription"

export default ({ pageContext }) => {
  const {
    Title,
    Subtitle,
    Cover,
    Year,
    tags,
    categories,
    Description,
    ProjectLink,
    GitHubLink,
  } = pageContext.project

  return (
    <Layout page="project-page">
      <ProjectCover title={Title} subtitle={Subtitle} cover={Cover} />
      <section className="section project-information">
        <div className="label label--trans project-detail__year" >{ Year }</div>
        <div className="project-detail__categories" >
          {categories.length <= 1 ? "Category" : "Categories"}
        { categories.map((cat)=>{
          return (<div className="label project-detail__category">{cat.Name}</div>)
        })}
        </div>
        <div className="project-detail__tags" >
          {tags.length <= 1 ? "Tag" : "Tags"}
        { tags.map((tag)=>{
          return (<div className="label label--trans project-detail__tag">{tag.Name}</div>)
        })}
        </div>
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
