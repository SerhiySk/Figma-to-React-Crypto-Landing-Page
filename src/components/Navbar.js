import Logo from './Logo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
const Navbar = ({ showModal }) => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          <button className="btn-menu" onClick={toggleLinks}>
            <svg
              width="26"
              height="15"
              viewBox="0 0 26 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.5H25M1.5 7.5H25M1.5 13.5H25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className={showLinks ? 'nav-links show-links' : 'nav-links'}>
          <Link className="nav-link" onClick={toggleLinks}>
            Home
          </Link>
          <Link className="nav-link" onClick={toggleLinks}>
            Company
          </Link>
          <Link className="nav-link" onClick={toggleLinks}>
            About
          </Link>
          <Link className="nav-link" onClick={toggleLinks}>
            Pricing
          </Link>
          <Link className="nav-link" onClick={toggleLinks}>
            Team
          </Link>
          <Link
            className="nav-link"
            onClick={() => {
              showModal();
              toggleLinks();
            }}
          >
            Contact
          </Link>
          <Link className="nav-link">Blog</Link>
        </div>
        <button className="btn-nav">Trade Now</button>
        {/* <button className="btn-menu">
          <svg
            width="26"
            height="15"
            viewBox="0 0 26 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1.5H25M1.5 7.5H25M1.5 13.5H25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button> */}
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--ffffff);
  font-family: var(--font-poppins);

  .btn-menu {
    display: block;
  }
  .btn-nav {
    display: none;
  }
  .nav-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    padding: var(--padding-16xl) 0;

    max-width: 1191px;
    margin: 0 auto;
    width: 100%;
  }
  .nav-header {
    width: 95%;
    display: flex;
    justify-content: space-between;
  }
  .nav-link {
    position: relative;
    line-height: 24px;
    color: var(--black);
    width: fit-content;
    width: 100%;
    padding: 20px 20px;
  }
  .nav-links {
    padding-left: 1rem;
    justify-self: end;
    align-self: flex-end;
    z-index: 3;
    height: 0;

    display: flex;
    flex-direction: column;
    max-width: 300px;

    width: 100vw;

    overflow: hidden;
    transition: var(--transition);
    background: #fffffff1;
  }
  .show-links {
    height: fit-content;
    padding: 2rem 0;
  }

  .btn-menu {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    gap: var(--gap-7xs);
    transition: var(--transition);
    :hover {
      color: var(--clr-primary-1);
      transform: rotate(90deg);
    }
  }

  .btn-nav {
    cursor: pointer;
    font-size: var(--paragraph-size);
    line-height: 17px;
    font-weight: 500;
    font-family: var(--font-poppins);
    color: var(--ffffff);
    border: 2px solid var(--color-indianred);
    background-color: transparent;
    border-radius: var(--br-31xl);
  }

  @media screen and (min-width: 768px) {
    .nav-center {
      padding: var(--padding-6xl) 0px;
      width: 95%;
      flex-direction: row;
      align-content: center;

      justify-content: space-between;
    }
    .nav-header {
      width: fit-content;
    }
    .nav-links {
      display: flex;
      flex-direction: row;
      align-self: center;

      justify-content: center;
      max-width: 100%;
      gap: var(--gap-2xs);
      font-size: var(--font-size-mini);
      width: fit-content;
      padding: 0;
      background: transparent;
      height: fit-content;
    }
    .nav-link {
      color: var(--white);
      width: fit-content;
      padding: 0;
    }
    .btn-nav {
      padding: var(--padding-xs) var(--padding-xl);
      box-sizing: border-box;
      display: block;
    }

    .btn-menu {
      display: none;
    }
  }
  @media screen and (min-width: 950px) {
    .nav-links {
      font-size: var(--paragraph-size);
      gap: var(--gap-xl);
    }

    .btn-nav {
      padding: var(--padding-mini) var(--padding-11xl);
    }
  }
  @media screen and (min-width: 1200px) {
    .nav-center {
      width: 90%;
    }
    .btn-nav {
      padding: var(--padding-mini) var(--padding-11xl);
    }
  }
`;
