import * as React from "react"

const seoData = {
  "title": "Muhammad Awwab",
  "description": "Muhammad Awwab is a an aspiring AI Engineer with a touch of creativity, design and problem solving.",
  "author": "Muhammad Awwab",
  "siteUrl": "https://m-awwab-khan.github.io/",
}

const Seo = () => (
  <>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={seoData.author} />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:description" content={seoData.description} />
  </>
)

export default Seo
