import * as React from "react"


const backgroundData = {
  title: "Background",
  part1: "Currently, I am studying Software Engineering at ",
  part2: "NEDUET",
  part2Href: "https://www.neduet.edu.pk/",
  part3: " where I am a student of first year giving final exams :)",
  line2: "Muhammad Awwab Khan is a creative thinker and adept software developer with expertise in Software Development, Artificial Intelligence, and Data Analytics tasks. Proficient in Python programming, Data Analysis, and Predictive Modeling. Currently, I am delving into the realm of Generative AI, focusing on Large Language Models (LLMs), OpenAI, Llama Index, LangChain, and vector databases. The journey includes mastering the intricacies of Natural Language Processing (NLP) and exploring the latest advancements in generative AI",
  line3Part1: "When I'm not in front of a computer screen",
  line3Part2: ", you'll likely find me indulge in reading novels, doing archery, or delving into spontaneous DIY projects—all of which I enjoy sharing on my ",
  line3Part3: "LinkedIn profile",
  line3Part3Href: "https://www.linkedin.com/in/muhammad-awwab-khan/",
  line3Part4: ".",
};
const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        {backgroundData.part1}
        <a className="underline-link" href={backgroundData.part2Href} target="_blank" rel="noreferrer">{backgroundData.part2}</a>
        {backgroundData.part3}
      </p>
      <p>
        {backgroundData.line2}
      </p>
      <p>
        <strong>{backgroundData.line3Part1}</strong>{backgroundData.line3Part2}
        <a className="underline-link" href={backgroundData.line3Part3Href} target="_blank" rel="noreferrer">{backgroundData.line3Part3}</a>
        {backgroundData.line3Part4}
      </p>
    </div>
  </section>
)

export default Background
