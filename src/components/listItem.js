import React from "react"
import BackGroundImage from "gatsby-background-image"

function ListItem({ file }) {
  console.log("listItem", file)
  const showListItem = () => {
    return file.edges.map(item => (
      <div style={{ display: "flex" }}>
        <BackGroundImage fixed={item.node.images.fixed} />
        <div className="card-body">
          <h5 className="card-title">{item.node.title}</h5>
          <p>{item.node.descriptions.descriptions}</p>
        </div>
      </div>
    ))
  }
  return showListItem()
}

export default ListItem
