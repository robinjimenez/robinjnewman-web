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
      <div className="project-detail__year">Year <span className="label label--trans project__year" >{ Year }</span>
      </div>
        <div className="project-detail__categories" >
          <div className="project__categories-title">{categories.length <= 1 ? "Category" : "Categories"}</div>
          <div className="project__categories-container">
            { categories.map((cat)=>{
              return (<div className="label project__category-item">{cat.Name}</div>)
            })}
          </div>
        </div>
        <div className="project-detail__tags" >
          <div className="project__tags-title">{tags.length <= 1 ? "Tag" : "Tags"}</div>
          <div className="project__tags-container">
            { tags.map((tag)=>{
              return (<div className="label label--secondary project__tag-item">{tag.Name}</div>)
            })}
          </div>
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
