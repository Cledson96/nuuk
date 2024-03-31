export default function Info() {
  return (
    <div className="counter-section pt-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="offer-text">
              <h2>
                Get <span>15% Discount</span> on your first Service
              </h2>
              <div className="theme-button">
                <a href="pricing.html" className="default-btn">
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="counter-area">
              <div className="row">
                <div className="col-lg-5 col-md-3 col-6 offset-lg-1">
                  <div className="counter-text">
                    <h2>
                      <span className="counter">1</span>K
                    </h2>
                    <p>Job Done</p>
                  </div>
                </div>

                <div className="col-lg-5 col-md-3 col-6">
                  <div className="counter-text">
                    <h2>
                      <span className="counter">989</span>
                    </h2>
                    <p>Happy Clients</p>
                  </div>
                </div>

                <div className="col-lg-5 col-md-3 col-6 offset-lg-1">
                  <div className="counter-text">
                    <h2>
                      <span className="counter">45</span>
                    </h2>
                    <p>Experts</p>
                  </div>
                </div>

                <div className="col-lg-5 col-md-3 col-6">
                  <div className="counter-text">
                    <h2>
                      <span className="counter">12</span>
                    </h2>
                    <p>Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
