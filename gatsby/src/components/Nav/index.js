import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Navbar, Nav } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import "./Nav.scss"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      brand: allSanityBrand {
        group(field: _id) {
          nodes {
            name
            description
          }
        }
      }
      contact: allSanityContactInfo {
        nodes {
          linkedIn
          instagram
        }
      }
    }
  `)
  const { name, description } = data.brand.group[0].nodes[0]
  const { linkedIn, instagram } = data.contact.nodes[0]

  return (
    <Navbar collapseOnSelect expand="md" sticky="top">
      <Navbar.Brand>
        <Link to="/">{name}</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Link to="/portraiture">Portraiture</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
