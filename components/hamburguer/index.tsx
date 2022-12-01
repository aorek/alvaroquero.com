import { useState } from "react"

export default function Hamburguer({ children }: any) {
  const [burgerActive, setBurgerActive] = useState(false)

  return (
    <>
      <div
        className={`hamburger ${burgerActive ? "is-active" : ""}`}
        aria-label="Toggle Menu"
        onClick={e => setBurgerActive(!burgerActive)}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>

      {children}

      <style jsx>{`
        .hamburger {
          background-color: transparent;
          border: 0;
          color: inherit;
          cursor: pointer;
          display: inline-block;
          font: inherit;
          margin: 0;
          overflow: visible;
          padding: 15px;
          text-transform: none;
          transition-duration: 0.15s;
          transition-property: opacity, filter;
          transition-timing-function: linear;
        }

        .hamburger-box {
          display: inline-block;
          height: 24px;
          position: relative;
          width: 35px;
        }

        .hamburger-inner {
          top: 50%;
          display: block;
          margin-top: -2px;
        }

        .hamburger-inner,
        .hamburger-inner::after,
        .hamburger-inner::before {
          position: absolute;
          width: 100%;
          height: 4px;
          transition-timing-function: ease;
          transition-duration: 0.15s;
          transition-property: transform;
          border-radius: 4px;
          background-color: rgba(26, 32, 44);
        }

        .hamburger-box .hamburger-inner {
          transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          transition-duration: 75ms;
        }

        .hamburger-inner::after,
        .hamburger-inner::before {
          display: block;
          content: "";
        }

        .hamburger-inner::before {
          top: -10px;
          transition: top 75ms ease 0.12s, opacity 75ms ease;
        }

        .hamburger-inner::after {
          bottom: -10px;
          transition: bottom 75ms ease 0.12s,
            transform 75ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }

        .hamburger.is-active .hamburger-inner {
          transition-delay: 0.12s;
          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          transform: rotate(45deg);
        }

        .hamburger.is-active .hamburger-inner::before {
          top: 0;
          transition: top 75ms ease, opacity 75ms ease 0.12s;
          opacity: 0;
        }

        .hamburger.is-active .hamburger-inner::after {
          bottom: 0;
          transition: bottom 75ms ease,
            transform 75ms cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
          transform: rotate(-90deg);
        }

        .hamburger.is-active:hover,
        .hamburger:hover {
          opacity: 0.7;
        }

        @media screen and (min-width: 500px) {
          .hamburger {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
