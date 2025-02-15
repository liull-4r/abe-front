import { Link } from "react-router-dom";


function HomeSixth() {
  return (
    <section className="goma video-section">
      <div data-parallax='{"y": 50}' className="sec-bg2"></div>
      <div className="auto-container">
        <h5>Working since 1992</h5>
        <h2>
          We are leader <br /> in Car Mechanical Work
        </h2>
        <div className="video-box">
          <div className="video-btn">
            <Link
              to="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
              className="overlay-link lightbox-image video-fancybox ripple"
            >
              <i className="flaticon-play"></i>
            </Link>
          </div>
          <div className="text">
            Watch intro video <br /> about us
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSixth