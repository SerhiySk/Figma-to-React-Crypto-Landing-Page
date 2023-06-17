import styled from 'styled-components';
import logoC from '../assets/images/logoC.png';
const VectorIcon = styled.img`
  position: relative;
  width: 35.34px;
  height: 40px;
  object-fit: cover;
  @media screen and (max-width: 950px) {
    width: 100%;
    height: 100%;
  }
`;
const Containerlogoicon = styled.div`
  width: 35.34px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 950px) {
    width: 27px;
    height: 30px;
  }
`;
const Cryptous = styled.b`
  position: relative;
  line-height: 24px;
  display: inline-block;
  width: 117.24px;
  flex-shrink: 0;
  @media screen and (max-width: 950px) {
    font-size: var(--font-size-xl);
  }
`;
const LogoRoot = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 0px var(--padding-mid);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-12xs);
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--ffffff);
  font-family: var(--font-poppins);
  @media screen and (max-width: 768px) {
    padding-bottom: 0px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 950px) {
    gap: var(--gap-12xs);
    padding: 0;
  }
`;
const Logo = () => {
  return (
    <LogoRoot>
      <Containerlogoicon>
        <VectorIcon alt="C" src={logoC} />
      </Containerlogoicon>
      <Cryptous>Cryptous</Cryptous>
    </LogoRoot>
  );
};

export default Logo;
