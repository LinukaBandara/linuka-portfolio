import { useEffect, useState } from "react";
import styled from "styled-components";

export const OrbitLoader = () => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setVisible(true);

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  if (!mounted || !visible) return null;

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

    /*
     * React Bits original proportions
     */
    width: 180px;
    height: 180px;

    margin: 2rem;
    user-select: none;

    /*
     * Original component uses scale: 2.
     * This makes both the beam and text substantially larger.
     */
    transform: scale(2);
  }

  .loader {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    z-index: 1;
    background-color: transparent;

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
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-image:
      radial-gradient(
        circle at 50% 50%,
        #ffffff 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 45% 45%,
        #52df8b 0%,
        transparent 45%
      ),
      radial-gradient(
        circle at 55% 55%,
        #22c55e 0%,
        transparent 45%
      ),
      radial-gradient(
        circle at 45% 55%,
        #16a34a 0%,
        transparent 45%
      ),
      radial-gradient(
        circle at 55% 45%,
        #065f46 0%,
        transparent 45%
      );

    mask: radial-gradient(
      circle at 50% 50%,
      transparent 0%,
      transparent 10%,
      black 25%
    );

    /*
     * Original React Bits movement.
     * Two independent animations create the smooth sweeping light.
     */
    animation:
      transform-animation 2s infinite alternate,
      opacity-animation 4s infinite;

    -webkit-animation:
      transform-animation 2s infinite alternate,
      opacity-animation 4s infinite;

    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;

    animation-timing-function:
      cubic-bezier(0.6, 0.8, 0.5, 1);
  }

  .loader-content {
    position: relative;
    z-index: 3;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader-text {
    font-family:
      var(--font-mono),
      "JetBrains Mono",
      monospace;

    /*
     * Bigger than your previous 16px.
     * The 2x wrapper scale makes the final visual size large.
     */
    font-size: 16px;

    font-weight: 600;

    letter-spacing: 0.24em;

    text-transform: uppercase;

    color: rgba(167, 243, 195, 0.95);

    white-space: nowrap;

    animation:
      initializing-text 2.5s ease-in-out both;
  }

  /*
   * ORIGINAL REACT BITS BEAM MOVEMENT
   */

  @keyframes transform-animation {
    0% {
      transform: translate(-55%);
    }

    100% {
      transform: translate(55%);
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

  /*
   * INITIALIZING text animation
   */

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

  /*
   * MOBILE
   *
   * Keep the loader large like React Bits,
   * but slightly reduce the scale so it fits comfortably.
   */

  @media (max-width: 640px) {
    .loader-wrapper {
      width: 155px;
      height: 155px;

      transform: scale(1.75);
    }

    .loader-text {
      font-size: 17px;
      letter-spacing: 0.2em;
    }
  }

  /*
   * VERY SMALL PHONES
   */

  @media (max-width: 380px) {
    .loader-wrapper {
      width: 145px;
      height: 145px;

      transform: scale(1.6);
    }

    .loader-text {
      font-size: 16px;
      letter-spacing: 0.18em;
    }
  }
`;



