import { features } from '../helpers/Constants';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="section-center features-section-center">
        <h3 className="section-title">
          The most trusted cryptocurrency platform
        </h3>
        <div className="container-features">
          {features.map((val, i) => {
            const { icon, title, text } = val;
            return (
              <div key={i} className="container-feature">
                <div className="container-feature-icon">
                  <img src={icon} alt="feature-icon" />
                </div>
                <h4 className="feature-title">{title}</h4>
                {text.map((value, i) => (
                  <p key={i} className="feature-text">
                    {value}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
