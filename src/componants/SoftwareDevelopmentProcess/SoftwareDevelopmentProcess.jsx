import React, { useState } from "react";
import "./SoftwareDevelopmentProcess.css";

const SoftwareDevelopmentProcess = () => {
  const [selectedCircle, setSelectedCircle] = useState(null);
  const [hoveredCircle, setHoveredCircle] = useState(null);

  const circleData = [
    {
      id: 0,
      r: 1000,
      icon: "📋",
      label: "Planning",
      description: "Requirements gathering and analysis",
      details:
        "Define project scope, gather requirements, analyze feasibility, create project roadmap, and establish timelines. This phase sets the foundation for the entire development process.",
    },
    {
      id: 1,
      r: 1680,
      icon: "🎨",
      label: "Design",
      description: "Architecture and UI/UX design",
      details:
        "Create system architecture, database schema, wireframes, and user interface designs. This phase transforms requirements into detailed specifications for development.",
    },
    {
      id: 2,
      r: 2400,
      icon: "💻",
      label: "Development",
      description: "Coding and implementation",
      details:
        "Write code according to design specifications, implement features, integrate components, and create APIs. This phase brings the design to life through programming.",
    },
    {
      id: 3,
      r: 3100,
      icon: "🧪",
      label: "Testing",
      description: "Quality assurance and validation",
      details:
        "Perform unit testing, integration testing, system testing, and user acceptance testing to identify and fix bugs. This phase ensures the software meets quality standards.",
    },
  ];

  const handleCircleClick = (id) => {
    setSelectedCircle(selectedCircle === id ? null : id);
  };

  const handleCircleHover = (id) => {
    setHoveredCircle(id);
  };

  const handleCircleLeave = () => {
    setHoveredCircle(null);
  };

  // Calculate positions for text labels - now at the bottom of each circle
  const getTextPosition = (circle) => {
    return { x: 3200, y: 3200 + circle.r - 310 };
  };

  return (
    <div
      style={{
        margin: "60px 0",
        background: "#f9f9f9",
        paddingBottom: "40px",
        paddingTop: "20px",
      }}
    >
      <div className="container">
        <div class="text-center">
          <div class="section-title py-4">Software Development Process</div>
        </div>
        <div className="d-flex software-development-container">
          <div className="svg-container">
            <svg viewBox="0 0 6400 6400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Fill gradients */}
                <linearGradient
                  id="circleGradient"
                  gradientUnits="userSpaceOnUse"
                  x1="3200"
                  y1="6400"
                  x2="3200"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#f5f2ff" />
                  <stop offset="60%" stopColor="rgb(249, 249, 249)" />
                  <stop offset="100%" stopColor="rgb(249, 249, 249)" />
                </linearGradient>

                <linearGradient
                  id="circleGradientHover"
                  gradientUnits="userSpaceOnUse"
                  x1="3200"
                  y1="6400"
                  x2="3200"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#e5ddff" />
                  <stop offset="55%" stopColor="rgb(249, 249, 249)" />
                  <stop offset="100%" stopColor="rgb(249, 249, 249)" />
                </linearGradient>

                <linearGradient
                  id="circleGradientSelected"
                  gradientUnits="userSpaceOnUse"
                  x1="3200"
                  y1="6400"
                  x2="3200"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#d9ccff" />
                  <stop offset="44%" stopColor="#f4f0fb" />
                  <stop offset="60%" stopColor="rgb(249, 249, 249)" />
                  <stop offset="100%" stopColor="rgb(249, 249, 249)" />
                </linearGradient>

                {/* Stroke gradients */}
                <linearGradient
                  id="strokeGradient"
                  gradientUnits="userSpaceOnUse"
                  x1="3200"
                  y1="6400"
                  x2="3200"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="rgb(249, 249, 249)" />
                  <stop offset="100%" stopColor="rgb(249, 249, 249)" />
                </linearGradient>
              </defs>
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
                      {circle.icon} &nbsp;&nbsp;{circle.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Accordion on the right side */}
          <div className="accordion-container">
            <div className="accordion">
              {[...circleData].map((item) => (
                <div
                  key={`accordion-${item.id}`}
                  className={`accordion-item ${
                    selectedCircle === item.id ? "active" : ""
                  }`}
                  onClick={() => handleCircleClick(item.id)}
                >
                  <div className="accordion-header">
                    <div className="accordion-icon">{item.icon}</div>
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
