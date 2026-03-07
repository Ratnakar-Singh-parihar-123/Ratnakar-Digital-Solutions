import React from "react";
import styled from "styled-components";

const Loader = () => {
  // Split the text into parts for different boxes
  const textParts = [
    "R",
    "A",
    "T",
    "N",
    "A",
    "K",
    "A",
    "R", // Ratnakar
    "D",
    "I",
    "G",
    "I",
    "T",
    "A",
    "L", // Digital
    "S",
    "O",
    "L",
    "U",
    "T",
    "I",
    "O",
    "N",
    "S", // Solutions
  ];

  return (
    <StyledWrapper>
      <div className="loader">
        {/* Boxes with text */}
        <div className="box box0">
          <div>{textParts[0]}</div>
        </div>
        <div className="box box1">
          <div>{textParts[1]}</div>
        </div>
        <div className="box box2">
          <div>{textParts[2]}</div>
        </div>
        <div className="box box3">
          <div>{textParts[3]}</div>
        </div>
        <div className="box box4">
          <div>{textParts[4]}</div>
        </div>
        <div className="box box5">
          <div>{textParts[5]}</div>
        </div>
        <div className="box box6">
          <div>{textParts[6]}</div>
        </div>
        <div className="box box7">
          <div>{textParts[7]}</div>
        </div>
        <div className="box box8">
          <div>{textParts[8]}</div>
        </div>
        <div className="box box9">
          <div>{textParts[9]}</div>
        </div>
        <div className="box box10">
          <div>{textParts[10]}</div>
        </div>
        <div className="box box11">
          <div>{textParts[11]}</div>
        </div>
        <div className="box box12">
          <div>{textParts[12]}</div>
        </div>
        <div className="box box13">
          <div>{textParts[13]}</div>
        </div>
        <div className="box box14">
          <div>{textParts[14]}</div>
        </div>
        <div className="box box15">
          <div>{textParts[15]}</div>
        </div>
        <div className="box box16">
          <div>{textParts[16]}</div>
        </div>
        <div className="box box17">
          <div>{textParts[17]}</div>
        </div>
        <div className="box box18">
          <div>{textParts[18]}</div>
        </div>
        <div className="box box19">
          <div>{textParts[19]}</div>
        </div>
        <div className="box box20">
          <div>{textParts[20]}</div>
        </div>

        <div className="ground">
          <div />
        </div>

        {/* Company name that appears when all boxes settle */}
        <div className="company-name">
          <span className="name-part">Ratnakar</span>
          <span className="name-part">Digital</span>
          <span className="name-part">Solutions</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  margin: 0;
  padding: 0;

  .loader {
    --duration: 4s;
    --primary: #4f46e5;
    --primary-light: #6366f1;
    --primary-rgba: rgba(79, 70, 229, 0);
    width: 400px;
    height: 400px;
    position: relative;
    transform-style: preserve-3d;
  }

  /* Company name that appears at the end */
  .company-name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 15px;
    opacity: 0;
    animation: appearName 0.5s ease forwards 3.8s;
    z-index: 100;
    white-space: nowrap;
    background: rgba(0, 0, 0, 0.3);
    padding: 20px 30px;
    border-radius: 50px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .name-part {
    font-size: 24px;
    font-weight: bold;
    color: white;
    text-shadow: 0 0 20px rgba(79, 70, 229, 0.5);
    animation: glowPulse 2s ease infinite;
  }

  .name-part:nth-child(1) {
    color: #ff6b6b;
    animation-delay: 0s;
  }
  .name-part:nth-child(2) {
    color: #4ecdc4;
    animation-delay: 0.2s;
  }
  .name-part:nth-child(3) {
    color: #ffe66d;
    animation-delay: 0.4s;
  }

  @keyframes appearName {
    0% {
      opacity: 0;
      transform: translate(-50%, -30%) scale(0.8);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @keyframes glowPulse {
    0%,
    100% {
      text-shadow: 0 0 20px currentColor;
    }
    50% {
      text-shadow:
        0 0 40px currentColor,
        0 0 60px currentColor;
    }
  }

  /* Responsive scaling */
  @media (max-width: 768px) {
    .loader {
      transform: scale(0.6);
    }
    .company-name {
      transform: translate(-50%, -50%) scale(0.8);
    }
  }

  @media (max-width: 480px) {
    .loader {
      transform: scale(0.4);
    }
  }

  /* Original loader styles with text support */
  .loader:before,
  .loader:after {
    --r: 20.5deg;
    content: "";
    width: 320px;
    height: 140px;
    position: absolute;
    right: 32%;
    bottom: -11px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.05)
    );
    backdrop-filter: blur(5px);
    transform: translateZ(200px) rotate(var(--r));
    -webkit-animation: mask var(--duration) linear forwards infinite;
    animation: mask var(--duration) linear forwards infinite;
    border-radius: 10px;
  }

  .loader:after {
    --r: -20.5deg;
    right: auto;
    left: 32%;
  }

  .loader .ground {
    position: absolute;
    left: -50px;
    bottom: -120px;
    transform-style: preserve-3d;
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }

  .loader .ground div {
    transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px)
      translateZ(100px) scale(0);
    width: 200px;
    height: 200px;
    background: var(--primary);
    background: linear-gradient(
      45deg,
      var(--primary) 0%,
      var(--primary) 50%,
      var(--primary-light) 50%,
      var(--primary-light) 100%
    );
    transform-style: preserve-3d;
    -webkit-animation: ground var(--duration) linear forwards infinite;
    animation: ground var(--duration) linear forwards infinite;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(79, 70, 229, 0.3);
  }

  .loader .ground div:before,
  .loader .ground div:after {
    --rx: 90deg;
    --ry: 0deg;
    --x: 44px;
    --y: 162px;
    --z: -50px;
    content: "";
    width: 156px;
    height: 300px;
    opacity: 0;
    background: linear-gradient(var(--primary), var(--primary-rgba));
    position: absolute;
    transform: rotateX(var(--rx)) rotateY(var(--ry))
      translate(var(--x), var(--y)) translateZ(var(--z));
    -webkit-animation: ground-shine var(--duration) linear forwards infinite;
    animation: ground-shine var(--duration) linear forwards infinite;
  }

  .loader .ground div:after {
    --rx: 90deg;
    --ry: 90deg;
    --x: 0;
    --y: 177px;
    --z: 150px;
  }

  .loader .box {
    --x: 0;
    --y: 0;
    position: absolute;
    -webkit-animation: var(--duration) linear forwards infinite;
    animation: var(--duration) linear forwards infinite;
    transform: translate(var(--x), var(--y));
  }

  .loader .box div {
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    width: 60px;
    height: 60px;
    position: relative;
    transform-style: preserve-3d;
    -webkit-animation: var(--duration) ease forwards infinite;
    animation: var(--duration) ease forwards infinite;
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(79, 70, 229, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  .loader .box div:before,
  .loader .box div:after {
    --rx: 90deg;
    --ry: 0deg;
    --z: 30px;
    --y: -30px;
    --x: 0;
    content: "";
    position: absolute;
    background: inherit;
    width: inherit;
    height: inherit;
    transform: rotateX(var(--rx)) rotateY(var(--ry))
      translate(var(--x), var(--y)) translateZ(var(--z));
    filter: brightness(var(--b, 1.2));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader .box div:after {
    --rx: 0deg;
    --ry: 90deg;
    --x: 30px;
    --y: 0;
    --b: 1.4;
  }

  /* Position all boxes - creating a circular pattern */
  .loader .box.box0 {
    --x: -180px;
    --y: -100px;
    left: 120px;
    top: 100px;
  }
  .loader .box.box1 {
    --x: -220px;
    --y: 80px;
    left: 80px;
    top: 120px;
  }
  .loader .box.box2 {
    --x: 80px;
    --y: -150px;
    left: 120px;
    top: 80px;
  }
  .loader .box.box3 {
    --x: 240px;
    --y: -30px;
    left: 150px;
    top: 120px;
  }
  .loader .box.box4 {
    --x: 40px;
    --y: 160px;
    left: 120px;
    top: 130px;
  }
  .loader .box.box5 {
    --x: -180px;
    --y: -100px;
    left: 80px;
    top: 90px;
  }
  .loader .box.box6 {
    --x: -220px;
    --y: 80px;
    left: 150px;
    top: 90px;
  }
  .loader .box.box7 {
    --x: -200px;
    --y: 160px;
    left: 120px;
    top: 100px;
  }
  .loader .box.box8 {
    --x: -140px;
    --y: -120px;
    left: 140px;
    top: 110px;
  }
  .loader .box.box9 {
    --x: -260px;
    --y: 40px;
    left: 60px;
    top: 130px;
  }
  .loader .box.box10 {
    --x: 120px;
    --y: -180px;
    left: 100px;
    top: 70px;
  }
  .loader .box.box11 {
    --x: 280px;
    --y: -50px;
    left: 130px;
    top: 110px;
  }
  .loader .box.box12 {
    --x: 20px;
    --y: 180px;
    left: 110px;
    top: 140px;
  }
  .loader .box.box13 {
    --x: -160px;
    --y: -110px;
    left: 90px;
    top: 80px;
  }
  .loader .box.box14 {
    --x: -240px;
    --y: 60px;
    left: 70px;
    top: 100px;
  }
  .loader .box.box15 {
    --x: -180px;
    --y: 140px;
    left: 100px;
    top: 120px;
  }
  .loader .box.box16 {
    --x: -120px;
    --y: -130px;
    left: 130px;
    top: 90px;
  }
  .loader .box.box17 {
    --x: -200px;
    --y: 20px;
    left: 110px;
    top: 110px;
  }
  .loader .box.box18 {
    --x: 100px;
    --y: -160px;
    left: 120px;
    top: 85px;
  }
  .loader .box.box19 {
    --x: 260px;
    --y: -70px;
    left: 140px;
    top: 115px;
  }
  .loader .box.box20 {
    --x: 0px;
    --y: 170px;
    left: 125px;
    top: 135px;
  }

  /* Animation names for all boxes */
  ${[...Array(21)]
    .map(
      (_, i) => `
    .loader .box.box${i} {
      -webkit-animation-name: box-move${i};
      animation-name: box-move${i};
    }
    .loader .box.box${i} div {
      -webkit-animation-name: box-scale${i};
      animation-name: box-scale${i};
    }
  `,
    )
    .join("")}

  /* Generate animations for all boxes */
  ${[...Array(21)]
    .map((_, i) => {
      const startTime = 6 + i * 2;
      const settleTime = 48 + i * 1.5;
      return `
      @keyframes box-move${i} {
        ${startTime}% {
          transform: translate(var(--x), var(--y));
        }
        ${settleTime}%,
        75% {
          transform: translate(0, 0);
        }
        85% {
          transform: translate(0, -20px);
        }
        95%, 100% {
          transform: translate(0, 120px);
        }
      }

      @keyframes box-scale${i} {
        ${startTime - 2}% {
          transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
        }
        ${startTime + 2}%, 100% {
          transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
        }
      }
    `;
    })
    .join("")}

  @keyframes ground {
    0%,
    75% {
      transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px)
        translateZ(100px) scale(0);
    }
    85%,
    95% {
      transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px)
        translateZ(100px) scale(1);
    }
    100% {
      transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px)
        translateZ(100px) scale(0);
    }
  }

  @keyframes ground-shine {
    0%,
    80% {
      opacity: 0;
    }
    85%,
    92% {
      opacity: 0.3;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes mask {
    0%,
    75% {
      opacity: 0;
    }
    76%,
    100% {
      opacity: 1;
    }
  }
`;

export default Loader;
