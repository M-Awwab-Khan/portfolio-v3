import * as React from "react"
import "./experience.scss"


const experienceData = [
  {
    "company": "Headstarter AI",
    "url": "https://headstarter.co/",
    "time": "July 2024 - Present",
    "position": "Software Engineering Intern"
  },
  {
    "company": "AI Club",
    "url": "https://aiclub.pk/",
    "time": "March 2024 - Present",
    "position": "Technical Team Member"
  },
]

const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {
          experienceData.map((data) => (
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href={data.url} target="_blank" rel="noreferrer">{data.company}</a>
                </div>
                <div className="job__time">{data.time}</div>
              </div>
              <div className="job__position">{data.position}</div>
            </div>
          ))
        }
      </div>

      <a href="./mawwabkhan-resume.pdf" target="_blank" rel="noreferrer" className="arrow-link">View My Resume</a>
    </div>
  </section>
)

export default Experience
