import React from "react"

import Nav from "../components/Nav"

const ContactPage = ({ data: { contact } }) => {
  return (
    <main className="info-page contact">
      <Nav />

      <div className="content">
        <p>{contact.nodes[0].text}</p>

        <a href={`mailto:${contact.nodes[0].email}`}>
          {contact.nodes[0].email}
        </a>
      </div>
    </main>
  )
}
export const query = graphql`
  query ContactPageQuery {
    contact: allSanityContactInfo {
      nodes {
        email
        text
      }
    }
  }
`
export default ContactPage
