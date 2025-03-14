import React, { useState } from "react";
import "./SoftwareDevelopmentProcess.css";

const SoftwareDevelopmentProcess = () => {
  const [selectedCircle, setSelectedCircle] = useState(2); // Default to the third circle (index 2)
  const [hoveredCircle, setHoveredCircle] = useState(null);

  const circleData = [
    {
      id: 0,
      r: 1000,
      label: "Planning",
      description: "Requirements gathering and analysis",
      details:
        "Define project scope, gather requirements, analyze feasibility, create project roadmap, and establish timelines. This phase sets the foundation for the entire development process.",
    },
    {
      id: 1,
      r: 1680,
      label: "Design",
      description: "Architecture and UI/UX design",
      details:
        "Create system architecture, database schema, wireframes, and user interface designs. This phase transforms requirements into detailed specifications for development.",
    },
    {
      id: 2,
      r: 2400,
      label: "Development",
      description: "Coding and implementation",
      details:
        "Write code according to design specifications, implement features, integrate components, and create APIs. This phase brings the design to life through programming.",
    },
    {
      id: 3,
      r: 3020,
      label: "Testing",
      description: "Quality assurance and validation",
      details:
        "Perform unit testing, integration testing, system testing, and user acceptance testing to identify and fix bugs. This phase ensures the software meets quality standards.",
    },
  ];

  const handleCircleClick = (id) => {
    setSelectedCircle(id);
  };

  const handleCircleHover = (id) => {
    setHoveredCircle(id);
  };

  const handleCircleLeave = () => {
    setHoveredCircle(null);
  };

  // Calculate positions for text labels - now at the bottom of each circle
  const getTextPosition = (circle) => {
    return { x: 3200, y: 3200 + circle.r - 250 };
  };


  return (
    <div style={{padding:"20px 0",backgroundColor:"#f0f8ff" , zIndex:"1000",position:"relative"}}>
    <div className="container">
    <div className="d-flex software-development-container">
      <div className="svg-container">
        <svg viewBox="0 0 6400 6400" xmlns="http://www.w3.org/2000/svg">
          {/* Render circles */}
          {[...circleData].reverse().map((circle) => (
            <circle
              key={`circle-${circle.id}`}
              className={`circle-element ${
                selectedCircle === circle.id ? "selected-circle" : ""
              } ${hoveredCircle === circle.id ? "hovered-circle" : ""}`}
              cx="3200"
              cy="3200"
              r={circle.r}
              role="presentation"
              onClick={() => handleCircleClick(circle.id)}
              onMouseEnter={() => handleCircleHover(circle.id)}
              onMouseLeave={handleCircleLeave}
            ></circle>
          ))}

          {/* Render text labels */}
          {circleData.map((circle) => {
            const textPos = getTextPosition(circle);

            return (
              <g
                key={`text-${circle.id}`}
                className={`text-group ${
                  selectedCircle === circle.id ? "selected-text" : ""
                }`}
                onClick={() => handleCircleClick(circle.id)}
                onMouseEnter={() => handleCircleHover(circle.id)}
                onMouseLeave={handleCircleLeave}
              >
                <text
                  x={textPos.x}
                  y={textPos.y}
                  textAnchor="middle"
                  className="circle-label"
                >
                  {circle.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Accordion on the right side */}
      <div className="accordion-container">
        <div className="accordion">
          {/* Use the same order as the circles (from outermost to innermost) */}
          {[...circleData].map((item) => (
            <div
              key={`accordion-${item.id}`}
              className={`accordion-item ${
                selectedCircle === item.id ? "active" : ""
              }`}
              onClick={() => handleCircleClick(item.id)}
            >
              <div className="accordion-header">
                <div className="accordion-icon">
                  {item.id === 0 && "📋"}
                  {item.id === 1 && "🎨"}
                  {item.id === 2 && "💻"}
                  {item.id === 3 && "🧪"}
                </div>
                <h3>{item.label}</h3>
                <div className="accordion-toggle">
                  {selectedCircle === item.id ? "−" : "+"}
                </div>
              </div>
              <div className="accordion-content">
                <p className="accordion-description">{item.description}</p>
                <p className="accordion-details">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default SoftwareDevelopmentProcess;
