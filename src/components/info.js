import React from "react"

function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Depending on the gatsby starter you used, you may need to include
              gatsby-transformer-sharp and gatsby-plugin-sharp as well, and make
              sure they are installed and included in your gatsby-config. npm
              install --save gatsby-transformer-sharp gatsby-plugin-sharp or
              yarn add gatsby-transformer-sharp gatsby-plugin-sharp
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Info
