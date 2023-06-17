const RowMain = () => {
  return (
    <div className="rowMainContainer">
      <div className="hrTop" />
      <div className="rowMain">
        <div className="flex-row mainNumberValue screenBig">
          <span>#</span>
          <svg
            width="6"
            height="4"
            viewBox="0 0 6 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.66667 0L0 4H5.33333L2.66667 0Z" fill="white" />
          </svg>
        </div>
        <p className="value value-name">name</p>
        <p className="screenBig">price</p>
        <p className="screenBig">24h %</p>
        <p className="screenBig">7d %</p>
        <div className="column-market-cap flex-row screenBig">
          <p>market cap</p>
          <div className="info-icon-container">
            <img className="info-icon" alt="" src="/info.svg" />
          </div>
        </div>
        <p>volume(24h)</p>
        <p className="screenBig">last 7 days</p>
      </div>
      <div className="hrBottom" />
    </div>
  );
};
export default RowMain;
