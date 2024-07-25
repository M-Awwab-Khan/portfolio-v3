import * as React from "react"
import Parser from 'html-react-parser';
import "./other-projects.scss"

const otherProjectsData = [
  {
    "name": "Personalized Book Recommender",
    "url": "https://github.com/M-Awwab-Khan/personalized-book-recommender",
    "description": "A content-based book recommender employing user profiles and NLP techniques.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },

  {
    "name": "Football Players Detection using YOLOV8",
    "url": "https://github.com/M-Awwab-Khan/football-players-detection-yolov8",
    "description": "",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },

  {
    "name": "Gesture Gaming with Python",
    "url": "https://github.com/M-Awwab-Khan/playing-nfs-with-gestures",
    "description": "Using OpenCV and imutils, I have written a Python program which enables me to play any racing game with four controls using only hand movements.",
    "used": [
      {"thing": "Python"}
    ]
  },
  {
    "name": "CIFAR10 Object Recognition using RESNET50",
    "url": "https://github.com/M-Awwab-Khan/CIFAR-10-Object-Recognition-using-RESNET50",
    "description": "In this project, I have used ResNET50 model to classify CIFAR-10 dataset, which is further integrated into API using FastAPI.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },
  {
    "name": "Dog vs Cat Classification Transfer Learning",
    "url": "https://github.com/M-Awwab-Khan/Dog-vs-Cat-Classification-Transfer-Learning",
    "description": "This project uses MobileNet_v3 model to classify dogs and cats, integrated into an API for ease of access.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },
  {
    "name": "MNIST Handwritten Digit Classification API",
    "url": "https://github.com/M-Awwab-Khan/MNIST-Handwritten-Digit-Classification-API",
    "description": "A neural network which classifies handwritten digits integrated into a FastAPI.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },
  {
    "name": "Breast Cancer Detection Using Neural Network",
    "url": "https://github.com/M-Awwab-Khan/Breast_Cancer_Detection_Using_Neural_Network",
    "description": "Classifying breast cancer using neural networks, integrated into an API using FastAPI.",
    "used": [
      {"thing": "TensorFlow"}
    ]
  },
  {
    "name": "Most Comprehensive IMDB Movies Analysis",
    "url": "https://github.com/M-Awwab-Khan/most-comprehensive-movies-analysis",
    "description": "The most comprehensive movies analysis which will be converted to a web app in the future.",
    "used": [
      {"thing": "Data Analysis"}
    ]
  },


  {
    "name": "Decision Tree Algorithm Implementation in Python",
    "url": "https://github.com/M-Awwab-Khan/decision-tree-classifier-implementation-python",
    "description": "Implementation of one of the most popular machine learning algorithms 'Decision Tree' in Python using NumPy.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },

  {
    "name": "Whatsapp Chat Analyzer",
    "url": "https://github.com/M-Awwab-Khan/whatsapp-chat-analyzer",
    "description": "A fully functional Streamlit app to analyze any WhatsApp chat written in Python.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },
  {
    "name": "Neural Network Implementation with Python",
    "url": "https://github.com/M-Awwab-Khan/neural-network-implementation-python",
    "description": "This is a simple dense layer based neural network implementation in Python. Can be used to create as many layers and neurons. Modular based approach.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },

  {
    "name": "Facial Recognition Based Attendance with RealTime Database",
    "url": "https://github.com/M-Awwab-Khan/facial-recognition-based-attendance-with-realtime-database",
    "description": "A desktop app written in Python to mark student attendance in real-time database.",
    "used": [
      {"thing": "Python"}
    ]
  },

  {
    "name": "Console Based Tic Tac Toe in Python",
    "url": "https://github.com/M-Awwab-Khan/tic-tac-toe-python",
    "description": "A simple terminal based interactive tic tac toe game written in Python.",
    "used": [
      {"thing": "Python"}
    ]
  },
  {
    "name": "Email/SMS Spam Classifier",
    "url": "https://github.com/M-Awwab-Khan/spam-sms-classifier",
    "description": "An end-to-end reliable spam classifier for both emails and SMS.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },
  {
    "name": "Linear Regression Algorithm Implementation in Python",
    "url": "https://github.com/M-Awwab-Khan/linear-regression-implementation",
    "description": "Implementation of well known machine learning algorithm namely Linear Regression from scratch written in Python.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },

  {
    "name": "Coordinate Geometry OOP",
    "url": "https://github.com/M-Awwab-Khan/coordinate-geometry-oop",
    "description": "An object-oriented design of components of coordinate geometry written in Python.",
    "used": [
      {"thing": "Python"}
    ]
  },
  {
    "name": "Predicting Movie Rental Duration",
    "url": "https://github.com/M-Awwab-Khan/predicting-movie-rental-durations",
    "description": "In this project, I have built regression models for a DVD rental firm to predict rental duration and evaluated them to recommend the best one.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },
  {
    "name": "Predicting Boston House Prices",
    "url": "https://github.com/M-Awwab-Khan/predicting-boston-house-prices",
    "description": "In this project I will be building a model that can provide a price estimate based on a home's characteristics.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },
  {
    "name": "Dr Semmelweis Hand Washing Data Analysis",
    "url": "https://github.com/M-Awwab-Khan/dr-semmelweis-handwashing-analysis",
    "description": "Data analysis project focused on analysing causes of discovery of handwashing by Dr Semmelweis and its consequences.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },
  {
    "name": "Analyzing Nobel Prize Winners",
    "url": "https://github.com/M-Awwab-Khan/analyzing-nobel-prize-winners",
    "description": "This notebook is focused on uncovering patterns in the past Nobel laureates and learning about the Nobel prize and our world more generally.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },

  {
    "name": "Object Oriented Bank Design",
    "url": "https://github.com/M-Awwab-Khan/object-oriented-bank-design",
    "description": "An incredible transformation of bank from procedural to functional to object-oriented design.",
    "used": [
      {"thing": "Python"}
    ]
  },
  {
    "name": "Google Play Store Data Analysis",
    "url": "https://github.com/M-Awwab-Khan/google-playstore-data-analysis",
    "description": "This project replicates some of the app store analytics provided by companies like App Annie or Sensor Tower.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },
  {
    "name": "Google Trends Time Series Analysis",
    "url": "https://github.com/M-Awwab-Khan/google-trends-time-series-analysis",
    "description": "This data analysis project focuses on analyzing google search trends data with the actual time series.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },
  {
    "name": "Predictive Modeling for Agriculture",
    "url": "https://github.com/M-Awwab-Khan/predictive-modeling-for-agriculture",
    "description": "In this project, I have applied machine learning to build a multi-class classification model to predict the type of 'crop', while using techniques to avoid multicollinearity.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },
  {
    "name": "Analyzing LEGO Dataset",
    "url": "https://github.com/M-Awwab-Khan/analyzing-LEGO-dataset",
    "description": "An in-depth data analysis of LEGO firm, their blocks, colors, themes and a whole lot more.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },
  {
    "name": "Analyzing Popularity of Programming Languages",
    "url": "https://github.com/M-Awwab-Khan/popularity-of-programming-languages",
    "description": "A data analysis project focused on analyzing the popularity of programming languages since the creation of Stack Overflow.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },
  {
    "name": "Analyzing College Majors using Pandas",
    "url": "https://github.com/M-Awwab-Khan/college-major-data-exploration",
    "description": "A Data Exploration Project in Pandas focused on Analysing the Post-University Salaries of Graduates by Major.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  },
  {
    "name": "End-to-End Blog Implementation in Flask",
    "url": "https://github.com/M-Awwab-Khan/cool-flask-blog",
    "description": "A fully-fledged blog web app with posts, users, comments, including all the CRUD operations built using Flask micro web framework.",
    "used": [
      {"thing": "CSS"}
    ]
  },
  {
    "name": "A New Era of Data Analysis in Baseball",
    "url": "https://github.com/M-Awwab-Khan/A-New-Era-of-Data-Analysis-in-Baseball",
    "description": "This data analysis project analyzes home runs of two giant baseball players namely Aaron Judge and Giancarlo Stanton.",
    "used": [
      {"thing": "Jupyter Notebook"}
    ]
  }
];


const FeaturedProjects = () => (
  <section className="section other-projects">
    <div className="section__title">Other Projects</div>
    <div className="section__content">
      {
        otherProjectsData.map((project) => (
          <div className="project">
            <div className="project__name">
              <a href={project.url} target="_blank" rel="noreferrer" className="arrow-link">{project.name}</a>
            </div>
            <p>{Parser(project.description)}</p>
            <div className="project__used">
              {
                project.used.map((item) => (
                  <span className="project__used__item">{item.thing}</span>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  </section>
)

export default FeaturedProjects
