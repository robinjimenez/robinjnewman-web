import React from "react"
import CaptionImage from "../CaptionImage"

const ProjectDescription = ({ description }) => (
  <div className="project-detail__description">
    {description.map((block) => {
      return (
        <div
          className={
            "project-description-block project-description-block--" + block.Alignment.toLowerCase()
          }
        >
          <div className="project-description-block__text">
            {block.Heading && (
              <h3 className="project-description__heading">{block.Heading}</h3>
            )}
            <p
              className="project-description__paragraph"
              dangerouslySetInnerHTML={{ __html: block.Paragraph }}
            ></p>
          </div>
          {block.CaptionedImage && (
            <div className="project-description-block__image">
              <CaptionImage
                className="project_description__image"
                image={block.CaptionedImage}
              />
            </div>
          )}
        </div>
      )
    })}
  </div>
)

export default ProjectDescription
