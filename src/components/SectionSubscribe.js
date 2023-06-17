import styled from 'styled-components';
import carcas from '../assets/images/carcas.svg';
import romb from '../assets/images/shape2.svg';

const SectionSubscribe = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="container-text">
          <h3 className="section-title">Never miss a drop</h3>
          <h4>{`Subscribe for the latest news, drops & collectibles`}</h4>
        </div>
        <form className="newsletter-form">
          <input
            type="text"
            placeholder="Enter your email address"
            className="input-newsletter"
          />

          <button className="btn-subscribe">Subscribe</button>
        </form>
      </div>
      <Backgroundshapes className="background-shapes">
        <BallShape className="ball-shape">
          <CarcasIcon alt="" src={carcas} />
        </BallShape>
        <RombShape alt="" src={romb} />
      </Backgroundshapes>
    </Wrapper>
  );
};

export default SectionSubscribe;

const Wrapper = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: var(--padding-73xl) 0px var(--padding-91xl);
  align-items: center;
  justify-content: flex-start;
  position: relative;
  text-align: left;
  font-size: var(--font-size-31xl);
  color: var(--ffffff);
  font-family: var(--font-poppins);

  .section-title {
    margin: 0;
    position: relative;
    font-size: inherit;
    line-height: 50px;
    font-weight: 700;
    font-family: inherit;
    display: inline-block;
    width: 463px;
  }
  .section-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-31xl);
    max-width: 578px;
    width: 90%;
    position: relative;
    z-index: 2;
  }
  .container-text {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-sm);
  }
  h4 {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-5xl);
    line-height: 28px;
    font-weight: 400;
    font-family: var(--paragraph);
  }
  .input-newsletter {
    border: 2px solid var(--ffffff);
    font-family: var(--paragraph);
    font-size: var(--font-size-mini);
    background-color: transparent;
    flex: 1;
    border-radius: var(--br-18xl);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    color: var(--white);
    padding: var(--padding-9xl) var(--padding-2xl);
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    z-index: 0;
  }
  .newsletter-form {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    position: relative;
  }
  .btn-subscribe {
    font-size: var(--paragraph-size);
    line-height: 24px;
    font-weight: 500;
    font-family: var(--poppins);
    color: var(--ffffff);
    cursor: pointer;
    border: none;
    padding: var(--padding-lgi) var(--padding-8xl);
    background-color: var(--color-indianred);
    margin: 0 !important;
    position: absolute;
    top: 50%;
    left: auto;
    border-radius: var(--br-12xl);

    right: 0;
    transform: translate(-5%, -50%);
  }

  @media screen and (max-width: 768px) {
    .section-title {
      font-size: var(--font-size-21xl);
      text-align: center;
      align-self: stretch;
      width: auto;
    }
    .container-text {
      align-self: stretch;
      width: auto;
    }
    .newsletter-form {
      align-self: stretch;
      width: auto;
    }
    h4 {
      font-size: var(--font-size-2xl);
      text-align: center;
    }
    .input-newsletter {
      padding: var(--padding-mid);
      box-sizing: border-box;
      width: 100%;
      max-width: 578px;
    }
    .btn-subscribe {
      padding: var(--padding-smi) var(--padding-15xl);
      transform: translate(-2%, -50%);
    }
  }
  @media screen and (max-width: 420px) {
    padding-top: var(--padding-31xl);
    padding-bottom: var(--padding-36xl);
    box-sizing: border-box;
    .section-title {
      font-size: var(--font-size-5xl);
      line-height: 24px;
    }
    .newsletter-form {
      padding-bottom: 0px;
      box-sizing: border-box;
    }
    h4 {
      font-size: var(--font-size-sm);
      line-height: 24px;
    }
    .section-center {
      gap: var(--gap-11xl);
      padding-top: 0px;
      padding-bottom: 0px;
      box-sizing: border-box;
    }
  }
`;

const CarcasIcon = styled.img`
  position: absolute;
  top: 2.96px;
  left: 2.88px;
  width: 341.4px;
  height: 327.67px;
  opacity: 0.6;
`;
const CornersIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 309.48px;
  height: 333.4px;
  opacity: 0.6;
`;
const BallShape = styled.div`
  position: relative;
  width: 343.82px;
  height: 333.4px;
  transform: translateX(-40%);
`;
const RombShape = styled.img`
  position: relative;
  width: 153.36px;
  height: 228.9px;
  transform: translateX(10%);
`;
const Backgroundshapes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-3xs);
  position: absolute;
  width: 100%;
  z-index: 1;
  @media screen and (max-width: 768px) {
    display: none;
    gap: var(--gap-3xs);
  }
`;
