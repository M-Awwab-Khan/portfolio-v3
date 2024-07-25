import * as React from "react"
import "./footer.scss"

const socialData = [
  {
    "title": "email",
    "url": "mailto:mawwabkhank2006@gmail.com"
  },
  {
    "title": "twitter",
    "url": "https://twitter.com/mawwabkhan"
  },
  {
    "title": "stackoverflow",
    "url": "https://stackoverflow.com/users/13348011/muhammad-awwab-khan"
  },
  {
    "title": "github",
    "url": "https://github.com/M-Awwab-Khan"
  },
  {
    "title": "linkedin",
    "url": "https://www.linkedin.com/in/muhammad-awwab-khan/"
  },
]
const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      <div className="top">
        <span>Developed by&nbsp;</span>
      </div>
      <div className="bottom">
        <span>Muhammad Awwab</span>
        <img className="emoji" src="./images/emojis/rockon.png" alt="emoji"/>
          <span>2024</span>
      </div>
      <div className="bottom credits">
        <small>
          Theme by
          <a href="https://github.com/bchiang7/bchiang7.github.io" rel="noreferrer" target="_blank"> Brittany Chiang</a>
        </small>
      </div>
    </div>
    <div className="footer__links">
      {
        socialData.map((social) => (
          <a href={social.url} target="_blank" rel="noreferrer" title="{{link.title}}">
            <span className="text">{social.title}</span>
          </a>
        ))
      }
    </div>
  </footer>
)

export default Footer
