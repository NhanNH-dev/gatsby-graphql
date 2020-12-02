import React from "react"
import BackGroundImage from "gatsby-background-image"
function Background({ styleClass, img, title, children }) {
  return (
    <BackGroundImage
      className={styleClass}
      style={{
        minHeight: "46vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      fluid={img}
    >
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-light">
        {title}
      </h1>
      {children}
    </BackGroundImage>
  )
}
export default Background
