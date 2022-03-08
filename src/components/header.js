import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

import "./header.css"
const Header = ({ siteTitle }) => (
	<nav className="navbar">
		<div className="navbar__left">
			<StaticImage className="brand-logo" src="../images/logo.png" alt="A dinosaur" />
		</div>
		<div className="navbar__right">
			<a href="#" className="navbar__link">Products</a>
			<a href="#" className="navbar__link">Pricing</a>
			<a href="#" className="navbar__link border-r1">FAQs</a>
			<a href="#" className="navbar__link">Log in</a>
			<a href="#" className="navbar__link ctas">Sign Up</a>
		</div>
	</nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
