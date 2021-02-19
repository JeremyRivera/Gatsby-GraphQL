import React from "react"
import { Link } from "gatsby"

function HeroSection() {
  return (
    <>
      <img src="/images/logos/logo.svg" alt="logo" />
      <h1>Hi Beautiful friends, I'm Jeremy</h1>
      <p>Welcome to my blog! I actually built this site using gatsby.</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </>
  )
}
export default HeroSection
