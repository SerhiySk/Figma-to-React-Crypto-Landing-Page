import imgPhone1 from '../assets/images/phone1.png';
import imgPhone2 from '../assets/images/phone2.png';
import svgAppstore from '../assets/images/appstore.svg';
import svgGooglePlay from '../assets/images/googleplay.svg';
import roundShape from '../assets/images/containerroundshape.svg';
const SectionDownloadsApp = () => {
  return (
    <div className="download-app-section">
      <div className="section-center">
        <div className="container-text">
          <h3 className="title-download-app">
            Try the future, today. <br />
            Download Crypto
          </h3>

          <p className="text-download-app">
            Stay connected to the market with our mobile app. Featuring advanced
            order types and analytical tools for experienced traders, as well as
            a simple buy & sell interface for those just getting started.
          </p>
        </div>
        <div className="btns-container">
          <button className="button-IOS">
            <img className="appstore-icon" alt="appstore" src={svgAppstore} />
          </button>
          <button className="button-android">
            <img
              className="googleplay-icon"
              alt="googleplay"
              src={svgGooglePlay}
            />
          </button>
        </div>

        <div className="container-phones">
          <div className="container-phone container-phone2">
            <img alt="phone" src={imgPhone2} />
          </div>
          <div className="container-phone container-phone1">
            <img alt="phone" src={imgPhone1} />
          </div>
        </div>
        <div className="container-background-shape">
          <img
            className="round-shape-icon"
            alt="background shape"
            src={roundShape}
          />
        </div>
      </div>
    </div>
  );
};
export default SectionDownloadsApp;
