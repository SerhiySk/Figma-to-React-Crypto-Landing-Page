import HeroBackground from './HeroBackground';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Wrapper className="hero">
      <div className="section-center">
        <div className="text-container">
          <h1 className="hero-title">
            Make better businees with Cryptocurrency
          </h1>
          <p className="hero-text">
            We offers users a fully operational long-term rental platform. It
            plans to leverages blockchain technology.
          </p>
        </div>
        <button className="btn-hero">Get Whitelisted</button>
      </div>
      <HeroBackground />
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  align-self: stretch;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  gap: var(--gap-14xl);
  width: 100%;
  text-align: left;
  font-size: var(--font-size-41xl);
  color: var(--white);
  font-family: var(--font-poppins);

  /* Text */
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-3xs);
    text-align: left;
    font-size: var(--font-size-41xl);
    color: var(--white);
    font-family: var(--font-poppins);
  }
  .hero-text {
    text-transform: none;
    font-size: var(--paragraph-size);
    line-height: 28px;
    font-family: var(--paragraph);
    color: var(--white);
    text-align: left;
    width: 500px;
  }
  .hero-title {
    margin: 0;
    font-size: var(--font-size-41xl);
    font-weight: 700;
    font-family: var(--font-poppins);
    color: var(--white);
    text-align: left;
    display: inline-block;
    width: 665px;
  }

  /* Text end */

  .btn-hero {
    cursor: pointer;
    font-weight: 500;
    border-radius: var(--br-31xl);
    background-color: var(--color-red);
    border: transparent;
    padding: var(--padding-mini) var(--padding-11xl);
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: var(--paragraph-size);
    color: var(--white);
    font-family: var(--font-poppins);
  }

  .section-center {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-14xl);
    z-index: 2;
    margin-left: 10%;
    text-align: left;
    font-size: var(--font-size-41xl);
    color: var(--white);
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 420px) {
    height: 351px;
    .hero-title {
      font-size: var(--font-size-xs);
    }
    .section-center {
      padding-bottom: 23px;
    }
  }

  @media screen and (max-width: 768px) {
    height: 400px;
    align-items: center;
    justify-content: flex-end;
    padding-top: 0;
    padding-bottom: 0;
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    .text-container {
      width: auto;
      align-items: center;
      justify-content: center;
    }
    .hero-text {
      font-size: var(--font-size-8xs);
      line-height: 24px;
      text-align: center;
      width: 93%;
    }
    .hero-title {
      font-weight: 700;
      font-family: var(--font-poppins);
      font-size: var(--font-size-13xl);
      line-height: 32px;
      text-align: center;
      width: 90%;
    }
    .section-center {
      width: fit-content;
      height: fit-content;
      gap: var(--gap-mini);
      align-items: center;
      justify-content: center;
      z-index: 2;
      padding-bottom: 40px;
    }
    .btn-hero {
      padding: var(--padding-6xs) var(--padding-sm);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 950px) {
    .hero-text {
      font-size: var(--font-size-base);
      max-width: 400px;
    }
    .hero-title {
      font-size: var(--font-size-16xl);
      max-width: 500px;
    }
    .section-center {
      z-index: 2;
      margin-left: 2%;
    }
  }
  @media screen and (max-width: 1200px) {
    .hero-text {
      font-size: var(--font-size-base);
    }
    .hero-title {
      font-size: var(--font-size-21xl);
    }
    .text-container {
      margin-left: 0;
    }
    .section-center {
      z-index: 2;
      margin-left: 5%;
    }
  }
`;
