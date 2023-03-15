import { useState } from "react";
import NavFooter from "../molecules/nav-footer";

interface IMobileNavProps {}

const MobileNav: React.FunctionComponent<IMobileNavProps> = (props) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className={`mobile-nav ${navOpen ? "mobile-nav-open" : ""}`}>
      <div className="mobile-nav-header">
        <a href="/" title="Home" className="nav__logo">
          <img src="/assets/logo.png" alt="Logo" />
        </a>
        <button
          className="mobile-nav-menu"
          onClick={() => {
            setNavOpen(true);
          }}
        >
          {navOpen ? (
            "X"
          ) : (
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12.5H17M3 6.5H21M3 18.5H21"
                stroke="#101828"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="nav">
        <a href="/" title="Home" className="nav__logo">
          <img src="/assets/logo.png" alt="Logo" />
        </a>
        <div className="nav__search">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
              stroke="#667085"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input type="text" name="search" id="search" placeholder="Search" />
        </div>
        <ul className="nav__links">
          <li className="nav__link">
            <a href="#home" title="Home">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 21V11H13V21M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z"
                  stroke="#667085"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Home
            </a>
          </li>
          <li className="nav__link">
            <a href="#home" title="Home">
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 17V7M7 17V1M1 17V11"
                  stroke="#667085"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Dashboard
              <span className="actions">10</span>
            </a>
          </li>
          <li className="nav__link">
            <a href="#home" title="Home">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 16L11 21L21 16M1 11L11 16L21 11M11 1L1 6L11 11L21 6L11 1Z"
                  stroke="#667085"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Projects
            </a>
          </li>
          <li className="nav__link">
            <a href="#home" title="Home">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 9L10 12L20 2M19 10V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H14"
                  stroke="#667085"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Tasks
            </a>
          </li>
          <li className="nav__link">
            <a href="#home" title="Home">
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 14C1 14 2 13 5 13C8 13 10 15 13 15C16 15 17 14 17 14V2C17 2 16 3 13 3C10 3 8 1 5 1C2 1 1 2 1 2V14ZM1 14V21"
                  stroke="#667085"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Reporting
            </a>
          </li>
          <li className="nav__link">
            <a href="#home" title="Home">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19M23 19V17C22.9993 16.1137 22.7044 15.2528 22.1614 14.5523C21.6184 13.8519 20.8581 13.3516 20 13.13M16 1.13C16.8604 1.3503 17.623 1.8507 18.1676 2.55231C18.7122 3.25392 19.0078 4.11683 19.0078 5.005C19.0078 5.89317 18.7122 6.75608 18.1676 7.45769C17.623 8.1593 16.8604 8.6597 16 8.88M13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1C11.2091 1 13 2.79086 13 5Z"
                  stroke="#667085"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Users
            </a>
          </li>
        </ul>
        <NavFooter />
      </div>
      <button
        className="mobile-nav-close"
        onClick={() => {
          setNavOpen(false);
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 1L1 13M1 1L13 13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default MobileNav;
