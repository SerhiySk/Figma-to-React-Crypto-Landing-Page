import styled from 'styled-components';
import imgCoins from '../assets/images/containercoins.svg';
import imgDiamond from '../assets/images/containerdiamond.svg';

const HeroBackground = () => {
  return (
    <Wrapper className="hero-background">
      <img className="background-shape-icon" alt="" src="/bg@2x.png" />
      <div className="container-icons">
        <div className="shapes">
          <img className="container-diamond-icon" alt="" src={imgDiamond} />
          <img className="container-coins-icon" alt="" src={imgCoins} />
        </div>
        <div className="oval-shape-container">
          <div className="oval-shape" />
          <div className="mark" />
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroBackground;

const Wrapper = styled.div`
  align-self: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  z-index: 1;

  .background-shape-icon {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0 auto;
    z-index: 0;
  }
  .container-icons {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-7xs);
    position: absolute;
    bottom: 0;
    margin-bottom: 26px;
    width: 100%;
    z-index: 1;
  }
  /* Shapes */
  .container-diamond-icon {
    position: relative;
    width: 137.77px;
    height: 124.99px;
    mix-blend-mode: normal;
  }
  .container-coins-icon {
    position: relative;
    width: 509px;
    height: 474.32px;
    padding-right: var(--padding-16xl);
  }
  .shapes {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: -36px;
  }

  /* Oval Shape */
  .mark,
  .oval-shape {
    position: absolute;
    border-radius: var(--br-31xl);
  }
  .oval-shape {
    top: 0;
    left: 0;
    border: 1px solid var(--white);
    box-sizing: border-box;
    width: 20px;
    height: 50px;
  }
  .mark {
    top: 11.59px;
    left: 8px;
    background-color: var(--white);
    width: 4px;
    height: 10px;
  }
  .oval-shape-container {
    position: relative;
    width: 20px;
    height: 50px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
