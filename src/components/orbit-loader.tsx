import { useEffect, useState } from "react";
import styled from "styled-components";

export const OrbitLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <StyledWrapper>
      <div className="loader-screen">
        <div className="loader-wrapper">
          <div className="loader" />

          <div className="loader-content">
            <span className="loader-text">INITIALIZING</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader-screen {
    position: fixed;
    inset: 0;
    z-index: 999999;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100dvh;
    background: #020302;
    overflow: hidden;
  }

  .loader-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
    user-select: none;
  }

  .loader {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: transparent;
    z-index: 1;

    mask: repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 6px,
      black 7px,
      black 8px
    );
  }

  .loader::after {
    content: "";
    position: absolute;
    inset: 0;

    background-image:
      radial-gradient(circle at 50% 50%, #ffffff 0%, transparent 50%),
      radial-gradient(circle at 45% 45%, #52df8b 0%, transparent 45%),
      radial-gradient(circle at 55% 55%, #22c55e 0%, transparent 45%),
      radial-gradient(circle at 45% 55%, #16a34a 0%, transparent 45%),
      radial-gradient(circle at 55% 45%, #065f46 0%, transparent 45%);

    mask: radial-gradient(
      circle at 50% 50%,
      transparent 0%,
      transparent 10%,
      black 25%
    );

    animation:
      transform-animation 2s infinite alternate,
      opacity-animation 4s infinite;

    animation-timing-function: cubic-bezier(0.6, 0.8, 0.5, 1);
  }

  .loader-content {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader-text {
    font-family: var(--font-mono, "JetBrains Mono", monospace);
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: rgba(167, 243, 195, 0.9);
    white-space: nowrap;

    animation: initializing-text 2.5s ease-in-out both;
  }

  @keyframes transform-animation {
    0% {
      transform: translateX(-55%);
    }

    100% {
      transform: translateX(55%);
    }
  }

  @keyframes opacity-animation {
    0%,
    100% {
      opacity: 0;
    }

    15% {
      opacity: 1;
    }

    65% {
      opacity: 0;
    }
  }

  @keyframes initializing-text {
    0% {
      opacity: 0;
      transform: translateY(6px);
    }

    18% {
      opacity: 1;
      transform: translateY(0);
    }

    72% {
      opacity: 1;
      transform: translateY(0);
    }

    100% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  @media (max-width: 640px) {
    .loader-wrapper {
      width: 150px;
      height: 150px;
    }

    .loader-text {
      font-size: 16px;
      letter-spacing: 0.2em;
    }
  }
`;