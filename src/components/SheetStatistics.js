import RowMain from './RowMain';
import RowChild from './RowChild';
import { statistics } from '../helpers/Constants';
import styled from 'styled-components';

const SheetStatistics = () => {
  return (
    <Wrapper className="sectionSheet">
      <div className="section-center sectionSheet-center">
        <h3 className="section-title">today's cryptocurrency prices</h3>
        <div className="sheet">
          <RowMain />
          {statistics.map((val, i) => {
            const {
              companyImg,
              name,
              nameShort,
              price,
              differenceDay,
              differenceWeek,
              marketCap,
              volumeInDay,
              volumeInDayConverted,
              chart,
            } = val;
            return (
              <RowChild
                companyImg={companyImg}
                name={name}
                nameShort={nameShort}
                differenceDay={differenceDay}
                differenceWeek={differenceWeek}
                marketCap={marketCap}
                price={price}
                volumeInDay={volumeInDay}
                volumeInDayConverted={volumeInDayConverted}
                chart={chart}
                number={i + 1}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
export default SheetStatistics;

const Wrapper = styled.section`
  padding-top: 95px;
  padding-bottom: 111px;
  width: 100%;

  .sectionSheet-center {
    max-width: 1170px;
    width: fit-content;
    margin: 0 auto;
  }
  .section-title {
    color: white;
    font-weight: bold;
    font-size: 32px;
    text-transform: capitalize;
    margin: 0 auto;
    width: fit-content;
    margin-bottom: 60px;
  }

  .rowChild,
  .rowMain {
    display: grid;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: flex-start;
    color: white;
  }
  .rowMainContainer,
  .rowContainer {
    display: flex;
    align-items: center;
    position: relative;
    text-transform: capitalize;
  }
  .hrTop,
  .hrBottom {
    position: absolute;
    width: 100%;
    border-top: 0.6px solid var(--gray-4);
    height: 0.6px;
    z-index: 1;
  }
  .column-market-cap {
    gap: 10px;
  }
  .info-icon-container {
    height: 14px;
    width: 14px;
  }
  .hrTop {
    top: 0;
  }
  .hrBottom {
    bottom: 0;
  }
  .rowMainContainer {
    height: 43px;
    display: flex;
    align-items: center;
  }
  /* Grid Justify Self */
  .number {
    justify-self: left;
  }
  .mainNumberValue {
    justify-self: center;
  }
  .value-name {
    justify-self: start;
  }
  /* Colors */
  .grey {
    color: var(--gray-4);
  }
  .green {
    color: var(--color-green);
  }
  .red {
    color: var(--color-red);
  }

  .rowContainer {
    height: 83px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .flex-row {
    display: flex;
    flex-direction: row;

    align-items: center;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }
  /* Flex gaps */
  .gapTiny {
    gap: 5px;
  }
  .gapMid {
    gap: 10px;
  }
  .gapLg {
    gap: 20px;
  }
  .mainNumberValue {
    gap: 3px;
  }

  p {
    width: fit-content;
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    padding-top: 30px;
    padding-bottom: 50px;
    .grey {
      font-size: 11px;
    }
    p {
      font-size: 14px;
    }
    .containerImgCompany {
      width: 24px;
      height: 24px;
    }
    .gapTiny {
      gap: 5px;
    }
    .gapMid {
      gap: 10px;
    }
    .screenBig {
      display: none;
    }
    .containerImgCompany {
      width: 24 px;
      height: 24 px;
    }
    .sectionSheet-center {
      width: 95%;
      max-width: 550px;
    }
    .section-title {
      font-size: 20px;
      margin-bottom: 30px;
    }

    .sheet {
      width: 100%;
    }
    .rowChild,
    .rowMain {
      width: 100%;
      justify-content: space-between;
      grid-template-columns: 137px 137px;
    }
  }

  @media screen and (min-width: 768px) {
    .grey {
      font-size: 10px;
    }
    .number span {
      font-size: 11px;
    }
    p {
      font-size: 11px;
    }
    .containerImgCompany {
      width: 20px;
      height: 20px;
    }
    .gapTiny {
      gap: 3px;
    }
    .gapMid {
      gap: 6px;
    }
    .gapLg {
      gap: 10px;
    }
    .mainNumberValue {
      gap: 3px;
    }

    .statisticsChart {
      width: 80px;
      height: 23.4px;
    }

    .rowChild,
    .rowMain {
      grid-template-columns: 35px 105px 90px 70px 70px 117px 118px 105px;
    }
  }
  @media screen and (min-width: 1000px) {
    p {
      font-size: 14px;
    }
    .grey {
      font-size: 11px;
    }
    .number span {
      font-size: 12px;
    }
    .containerImgCompany {
      width: 24px;
      height: 24px;
    }
    .gapTiny {
      gap: 5px;
    }
    .gapMid {
      gap: 10px;
    }
    .gapLg {
      gap: 20px;
    }
    .mainNumberValue {
      gap: 3px;
    }

    .statisticsChart {
      width: 100px;
      height: 30px;
    }
    .rowChild,
    .rowMain {
      grid-template-columns: 50px 160px 120px 100px 100px 150px 150px 140px;
    }
  }
  @media screen and (min-width: 1200px) {
    .rowChild,
    .rowMain {
      grid-template-columns: 70px 185px 145px 120px 120px 180px 180px 170px;
    }
  }
`;
