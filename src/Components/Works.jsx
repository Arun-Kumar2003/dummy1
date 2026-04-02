import React, { useState } from "react";
import "../assets/styles/works_cards.css";

const Works = () => {

  let [filter, setFilter] = useState("All")

  let project = [
    {
      id :1  ,
      title : "AGENTGO - INSURANCE CRM",
      category : "Flutter",
      description : "State-of-the-art CRM for insurance agents featuring full-cycle client management and automated commission tracking.",
      image : "",
      tech : ["Flutter","Supabase","Agent Networking"]
    },
    {
      id :2  ,
      title : "INTERNAL COMMUNICATION PLATFORM",
      category : "",
      description : "A high-performance secure messaging platform for enterprise collaboration and real-time data sync.",
      image : "",
      tech : ["Real-time","Node.js","Enterprise sync"]
    },
    {
      id :3  ,
      title : "AI AGRICULTURE SYSTEM",
      category : "",
      description : "Intelligent system for early detection of crop-related risks using data-driven insights and conference-grade AI models.",
      image : "",
      tech : ["Python","ML Models","AgriTech"]
    },
    {
      id :4  ,
      title : "NO-APP TRANSPORT BOOKING",
      category : "",
      description : "An efficient method for booking transportation without a mobile app, focusing on high availability and low-latency interaction.",
      image : "",
      tech : ["Web-First","Real-time Allocation","UX Optimization"]
    },
    {
      id :5 ,
      title : "CARDIO DISEASE FORECASTING",
      category : "",
      description : "Advanced heart disease risk forecasting system using clinical machine learning markers to improve patient outcomes.",
      image : "",
      tech : ["ML Forecast","Clinical Data","Scikit Learn"]
    },
    {
      id :7 ,
      title : "SASA - ACADEMIC PLATFORM",
      category : "",
      description : "Seamless Academic & Skill Assessment Platform for integrated performance tracking and real-time student evaluation.",
      image : "",
      tech : ["Academic Tech","Skill Mapping","Data Analysis"]
    },
    {
      id :8 ,
      title : "FINANCIAL MANAGEMENT SYSTEM",
      category : "Flutter",
      description : "A high-performance system for tracking income, shared wallets, and custom analytics with gamified rewards.",
      image : "",
      tech : ["Flutter","Supabase","Stripe"]
    },
    {
      id :9 ,
      title : "WORKSPACE BOOKING SUITE",
      category : "Flutter",
      description : "A modern digital initiative for high-performance booking, scalable backend systems, and intuitive coworking UX.",
      image : "",
      tech : ["FlutterFlow","Supabase","IOT"]
    }
  ]

  let filteredProject = filter === "All" ? project : project.filter((item)=>item.tech.includes(filter))



  return (
    <section className="works-container">
      
      <div className="works-tag">🔥 BUILDER MODE</div>

      <h1 className="works-heading">What I've Built</h1>

      <p className="works-subtext">
        Real products. Real users. Real impact.
      </p>

       <div className="works-filters">
        {["All", "Flutter", "Supabase", "Python", "Stripe"].map((item) => (
          <button
            key={item}
            className={`works-btn ${ filter === item ? "works-btn-active" : "" }`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

       <div className="works-card">
        {filteredProject.map((item) => (
          <div className="card1" key={item.id} style={{ zIndex: item.id }}>
            
            <div className="works-image">
              <img src={item.image} alt="image terla mame" />
            </div>

            <div className="works-def">
              
              <h1>{item.title}</h1>

              <p>{item.description}</p>

              <div className="project-tech">
                {item.tech.map((techItem, index) => (
                  <p key={index}>{techItem}</p>
                ))}
              </div>

              <p>PRODUCTION CASE STUDY</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;