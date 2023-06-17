import { learnMoreContent } from '../helpers/Constants';
import calendar from '../assets/images/calendar.svg';
import clock from '../assets/images/clock.svg';

const SectionLearnMore = () => {
  return (
    <div className="learn-more">
      <div className="section-center learn-more-section-center">
        <h3 className="section-title">Learn to thrive</h3>
        <div className="learn-items">
          {learnMoreContent.map((val, i) => {
            const { img, title, text, author, date, minsToRead } = val;
            return (
              <div className="learn-item" key={i}>
                <div className="img-container">
                  <img alt="learn-more" src={img} />
                </div>
                <div className="learn-item-content">
                  <h4 className="learn-item-title">{title}</h4>
                  <p className="learn-item-text">{text}</p>

                  <div className="learn-item-footer">
                    <div className="author">By: {author}</div>
                    <div className="footer-flex">
                      <div className="container-img">
                        <img alt="calendar" src={calendar} />
                      </div>
                      <span>{date}</span>
                    </div>
                    <div className="footer-flex">
                      <div className="container-img">
                        <img alt="clock" src={clock} />
                      </div>
                      <span>{minsToRead} Min to read</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionLearnMore;
