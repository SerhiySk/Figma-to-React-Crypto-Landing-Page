import iconFacebook from '../assets/images/iconfacebook.svg';
import iconTwitter from '../assets/images/icontwitter.svg';
import iconLinkedIn from '../assets/images/iconlinkedin.svg';
import iconInstagram from '../assets/images/iconinstagram.svg';
import { footerColumns } from '../helpers/Constants';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="footer-links">
          {footerColumns.map((val, i) => {
            const { title, links } = val;
            return (
              <div className="links-column" key={i}>
                <h5 className="column-title">{title}</h5>
                <div className="links">
                  {links.map((link, index) => (
                    <Link className="footer-link" key={index}>
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="hr" />
        <div className="footer-section">
          <p className="copyright">Copyright 2021, Cryptous</p>
          <div className="social-icons">
            <SocialLink className="social-icon">
              <IconFacebook alt="" src={iconFacebook} />
            </SocialLink>
            <SocialLink2 className="social-icon">
              <IconTwitter alt="" src={iconTwitter} />
            </SocialLink2>
            <SocialLink className="social-icon">
              <IconLinkedin alt="" src={iconLinkedIn} />
            </SocialLink>
            <SocialLink className="social-icon">
              <IconInstagram alt="" src={iconInstagram} />
            </SocialLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  align-self: stretch;
  background: linear-gradient(242.06deg, #4e0062, #220076);
  display: flex;
  flex-direction: column;
  padding: var(--padding-63xl) 0px var(--padding-32xl);
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--ffffff);
  font-family: var(--paragraph);

  .section-center {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-29xl);
    max-width: 1170px;
    width: 90%;
    margin: 0 auto;
  }
  .footer-links {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  .links-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-13xl);
  }
  .column-title {
    position: relative;
    font-weight: 600;
    font-size: 17px;
  }
  .links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-7xl);
    font-size: var(--paragraph-size);
    color: #e6e6e6;
  }
  .footer-link {
    position: relative;
    line-height: 140.5%;
    opacity: 0.8;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    color: inherit;
  }
  .hr {
    align-self: stretch;
    position: relative;
    border-top: 1px solid #bcbcbc;
    box-sizing: border-box;
    height: 1px;
  }
  .footer-section {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: var(--font-size-sm);
    color: var(--color-silver-200);
  }

  .social-icons {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mid);
  }

  @media screen and (max-width: 768px) {
    .footer-links {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      row-gap: 30px;
    }
    .links-column {
      width: 140px;
      gap: var(--gap-xl);
    }
    .link {
      font-size: var(--font-size-sm);
    }
  }

  @media screen and (max-width: 420px) {
    padding-top: var(--padding-10xl);
    padding-bottom: var(--padding-22xl);
    box-sizing: border-box;
    .section-center {
      max-width: 1170px;
      width: 100%;
      margin: 0 auto;
    }
    .footer-links {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: start;
      row-gap: 30px;
      width: 90%;
      margin: 0 auto;
    }
    .footer-section {
      flex-direction: column;
      max-width: 1170px;
      width: 90%;
      margin: 0 auto;
      gap: var(--gap-7xl);
    }
  }
`;

const IconFacebook = styled.img`
  position: relative;
  width: 6px;
  height: 12px;
`;
const IconTwitter = styled.img`
  position: relative;
  width: 13.42px;
  height: 10.9px;
`;
const SocialLink2 = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--color-indianred);
  border: 1px solid var(--color-indianred);
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  display: flex;
  flex-direction: column;
  padding: var(--padding-3xs) var(--padding-4xs);
  align-items: flex-start;
  justify-content: flex-start;
`;
const IconLinkedin = styled.img`
  position: relative;
  width: 11.07px;
  height: 12px;
`;
const SocialLink = styled.div`
  border-radius: var(--br-3xs);
  border: 1px solid var(--text-paragraph);
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-3xs) var(--padding-smi);
  align-items: center;
  justify-content: center;
`;
const IconInstagram = styled.img`
  position: relative;
  width: 13.51px;
  height: 14px;
`;
const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid);
`;
