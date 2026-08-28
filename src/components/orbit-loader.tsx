import { useEffect, useState } from "react";
import styled from "styled-components";

const LOADER_DURATION = 2500;
const FADE_DURATION = 450;

export const OrbitLoader = () => {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setExiting(true);
    }, LOADER_DURATION - FADE_DURATION);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, LOADER_DURATION);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <StyledWrapper>
      <div
        className={`loader-screen ${exiting ? "loader-screen-exit" : ""}`}
        aria-label="Loading portfolio"
      >
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
    z-index: 99999;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100dvh;

    overflow: hidden;
    background: #020302;

    opacity: 1;
    visibility: visible;

    transition:
      opacity ${FADE_DURATION}ms cubic-bezier(0.76, 0, 0.24, 1),
      visibility ${FADE_DURATION}ms linear;

    isolation: isolate;
  }

  .loader-screen-exit {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  .loader-wrapper {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: min(180px, 46vw);
    height: min(180px, 46vw);

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
    -webkit-mask: repeating-linear-gradient(
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
      radial-gradient(
        circle at 50% 50%,
        rgba(255, 255, 255, 0.9) 0%,
        transparent 45%
      ),
      radial-gradient(
        circle at 45% 45%,
        rgba(82, 223, 139, 0.95) 0%,
        transparent 44%
      ),
      radial-gradient(
        circle at 55% 55%,
        rgba(34, 197, 94, 0.9) 0%,
        transparent 44%
      ),
      radial-gradient(
        circle at 45% 55%,
        rgba(22, 163, 74, 0.8) 0%,
        transparent 44%
      ),
      radial-gradient(
        circle at 55% 45%,
        rgba(6, 95, 70, 0.85) 0%,
        transparent 44%
      );

    mask: radial-gradient(
      circle at 50% 50%,
      transparent 0%,
      transparent 10%,
      black 25%
    );
    -webkit-mask: radial-gradient(
      circle at 50% 50%,
      transparent 0%,
      transparent 10%,
      black 25%
    );

    animation:
      transform-animation 2s infinite alternate,
      opacity-animation 4s infinite;

    animation-timing-function: cubic-bezier(0.6, 0.8, 0.5, 1);

    filter: blur(1px);
  }

  .loader-content {
    position: relative;

    z-index: 3;

    display: flex;
    align-items: center;
    justify-content: center;

    pointer-events: none;
  }

  .loader-text {
    display: block;

    font-family: var(--font-mono, "JetBrains Mono", monospace);
    font-size: clamp(13px, 2.5vw, 16px);
    font-weight: 500;

    letter-spacing: 0.28em;
    text-transform: uppercase;

    color: rgba(167, 243, 195, 0.9);

    white-space: nowrap;

    animation: initializing-text 2s ease-in-out both;
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
      transform: translateY(5px);
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
      transform: translateY(-3px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .loader::after {
      animation: none;
      opacity: 0.65;
    }

    .loader-text {
      animation: none;
      opacity: 1;
    }

    .loader-screen {
      transition: opacity 250ms ease;
    }
  }
`;
