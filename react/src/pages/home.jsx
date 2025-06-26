import React from 'react';
import About from './About';
import GOD from "./assets/Goat.jpg";

const Home = ({ items, users }) => {
  return (
    <div style={{ textAlign: "left", padding: "2rem" }}>
      <About items={items} users={users} />
      <img
        src={GOD}
        alt="Goat"
        style={{
          width: "320px",
          height: "auto",
          borderRadius: "24px",
          boxShadow: "0 8px 32px rgba(67,198,172,0.25), 0 1.5px 8px rgba(0,0,0,0.10)",
          margin: "32px auto",
          display: "block",
          border: "6px solid #fff",
          transition: "transform 0.5s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.5s",
          animation: "popIn 1s cubic-bezier(.68,-0.55,.27,1.55)",
          cursor: "pointer"
        }}
        onMouseOver={e => {
          e.currentTarget.style.transform = "scale(1.08) rotate(-2deg)";
          e.currentTarget.style.boxShadow = "0 16px 48px rgba(67,198,172,0.35), 0 3px 16px rgba(0,0,0,0.15)";
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = "scale(1) rotate(0deg)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(67,198,172,0.25), 0 1.5px 8px rgba(0,0,0,0.10)";
        }}
      />
      <style>
        {`
          @keyframes popIn {
            0% {
              opacity: 0;
              transform: scale(0.7) rotate(-10deg);
            }
            80% {
              opacity: 1;
              transform: scale(1.05) rotate(2deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }
        `}
      </style>
    </div>
  )
}

export default Home