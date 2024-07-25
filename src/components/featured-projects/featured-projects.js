import * as React from "react"
import "./featured-projects.scss"

const FeaturedProjects = () => (
  <section className="section featured-projects">
    <div className="section__title">Featured Projects</div>
    <div className="section__content">
      <div className="project blistabloc">
        <figure className="project__pic">
          <a href="https://github.com/M-Awwab-Khan/smart-teaching-assistant" rel="noreferrer" target="_blank">
            <img src="./images/featured/sta/smart-teaching-assistant mockup.png" alt=""/>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://github.com/M-Awwab-Khan/smart-teaching-assistant/" rel="noreferrer" target="_blank">Smart Teaching Assistant</a>
          </div>
          <p>An application designed to facilitate teachers in managing multiple classes and quizzes, capturing and analyzing student responses via Optical Mark Recognition (OMR), and maintaining a digital whiteboard for class sessions.</p>
        </figcaption>
      </div>

      <div className="project screentime">
        <figure className="project__pic">
          <a href="https://github.com/M-Awwab-Khan/lp-price-prediction-and-recommendation" rel="noreferrer" target="_blank">
            <img src="./images/featured/lpprs/lpprs mockup.png" alt=""/>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://github.com/M-Awwab-Khan/lp-price-prediction-and-recommendation/" rel="noreferrer" target="_blank">Laptop Price Predictor and Recommender</a>
          </div>
          <p>A simple application which predicts laptop price based on its features and recommends similar laptops to it.</p>
        </figcaption>
      </div>

      <div className="project blistabloc">
        <figure className="project__pic">
          <a href="https://github.com/M-Awwab-Khan/collaborative-filtering-based-book-recommender-application" rel="noreferrer" target="_blank">
            <img src="./images/featured/cbfbr/cbfbr mockup.png" alt=""/>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://github.com/M-Awwab-Khan/collaborative-filtering-based-book-recommender-application" rel="noreferrer" target="_blank">Book Recommender</a>
          </div>
          <p>A desktop application which leverages collaborative filtering recommendation algorithm to recommends books similar to any book.</p>
        </figcaption>
      </div>
    </div>
  </section>
)

export default FeaturedProjects
