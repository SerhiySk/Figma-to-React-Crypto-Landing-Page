import Logo from './Logo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <Logo />
        <div className="nav-links">
          <Link className="nav-link">Home</Link>
          <Link className="nav-link">Company</Link>
          <Link className="nav-link">About</Link>
          <Link className="nav-link">Pricing</Link>
          <Link className="nav-link">Team</Link>
          <Link className="nav-link">Contact</Link>
          <Link className="nav-link">Blog</Link>
        </div>
        <button className="btn-nav">Trade Now</button>
        <button className="btn-menu">
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
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: var(--padding-6xl) 0px;
  box-sizing: border-box;
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
  .nav-center {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 1191px;
    margin: 0 auto;
    width: 90%;
  }
  .nav-link {
    position: relative;
    line-height: 24px;
    color: var(--white);
  }
  .nav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-xl);
    font-size: var(--paragraph-size);
  }
  .btn-menu {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-7xs);
  }
  .btn-nav {
    cursor: pointer;
    font-size: var(--paragraph-size);
    line-height: 17px;
    font-weight: 500;
    font-family: var(--font-poppins);
    color: var(--ffffff);
    border: 2px solid var(--color-indianred);
    padding: var(--padding-mini) var(--padding-11xl);
    background-color: transparent;
    border-radius: var(--br-31xl);
  }

  @media screen and (max-width: 1200px) {
    .nav-center {
      width: 95%;
    }
    .nav-links {
      font-size: var(--font-size-mini);
    }
  }
  @media screen and (max-width: 950px) {
    .nav-links {
      gap: var(--gap-2xs);
    }
    .btn-nav {
      padding: var(--padding-xs) var(--padding-xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 768px) {
    padding-top: var(--padding-16xl);
    padding-bottom: var(--padding-16xl);
    box-sizing: border-box;
    .nav-links {
      display: none;
    }
    .btn-menu {
      display: flex;
    }
    .btn-nav {
      display: none;
    }
  }
`;
