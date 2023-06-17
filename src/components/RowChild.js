import dots from '../assets/images/dots.svg';
import triangularUp from '../assets/images/triangular-up.svg';
import triangularDown from '../assets/images/triangular-down.svg';

const RowChild = ({
  companyImg,
  name,
  nameShort,
  differenceDay,
  differenceWeek,
  marketCap,
  volumeInDay,
  volumeInDayConverted,
  chart,
  number,
  price,
}) => {
  const triangularDay = differenceDay > 0 ? triangularUp : triangularDown;
  const triangularWeek = differenceWeek > 0 ? triangularUp : triangularDown;
  const differencePerDay =
    differenceDay > 0 ? differenceDay : differenceDay.toString().slice(1);
  const differencePerWeek =
    differenceWeek > 0 ? differenceWeek : differenceWeek.toString().slice(1);
  function defineColor(val) {
    return val > 0 ? '#1AFF7C' : '#FF1A1A';
  }
  return (
    <div className="rowContainer">
      <div className="rowChild">
        <div className="number flex-row gapMid screenBig">
          <img className="iconStar" alt="star" src="/star.svg" />
          <span className="grey">{number}</span>
        </div>
        <div className="value value-name flex-row gapMid">
          <div className="containerImgCompany">
            <img className="iconCompany" alt="" src={companyImg} />
          </div>
          <div className="containerCompany flex-row gapTiny">
            <p className="company">{name}</p>
            <span className="companyShort grey">{nameShort}</span>
          </div>
        </div>
        <p className="screenBig">${price}</p>
        <div className="value  flex-row gapTiny screenBig">
          <img className="iconDifference" alt="" src={triangularDay} />
          <p style={{ color: defineColor(differenceDay) }}>
            {differencePerDay}%
          </p>
        </div>

        <div className="value flex-row gapTiny screenBig">
          <img className="iconDifference" alt="" src={triangularWeek} />
          <p style={{ color: defineColor(differenceWeek) }}>
            {differencePerWeek}%
          </p>
        </div>
        <p className="screenBig">${marketCap}</p>
        <div className="value flex-column gapMid">
          <p>${volumeInDay}</p>

          <span className="grey">
            {volumeInDayConverted} {nameShort}
          </span>
        </div>
        <div className="value flex-row gapLg screenBig">
          <img className="statisticsChart" alt="" src={chart} />
          <a href="#">
            {' '}
            <img className="dots-icon" alt="" src={dots} />
          </a>
        </div>
      </div>
      <div className="hrBottom" />
    </div>
  );
};
export default RowChild;
