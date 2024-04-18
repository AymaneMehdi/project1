import Data from "@data/sections/services.json";

import Caroucel from "@components/sliders/Caroucel";

const ServicesSection = () => {
  return (
    <>
      <section className="mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="mil-animation-frame">
            <div
              className="mil-animation mil-position-1 mil-scale"
              data-value-1="2.4"
              data-value-2="1.4"
              style={{ top: "300px", right: "-100px" }}
            ></div>
            <div
              className="mil-animation mil-position-2 mil-scale"
              data-value-1="2"
              data-value-2="1"
              style={{ left: "150px" }}
            ></div>
          </div>
          <div className="container mil-p-120-0">
            <div className="mil-mb-120">
              <div className="row">
                <div className="col-lg-10">
                  <span
                    className="mil-suptitle mil-light-soft mil-suptitle-right mil-up"
                    dangerouslySetInnerHTML={{ __html: Data.subtitle }}
                  />
                </div>
              </div>

              <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
                <h2
                  className="mil-h1 mil-muted mil-center"
                  dangerouslySetInnerHTML={{ __html: Data.title1 }}
                />
              </div>
            </div>

            <Caroucel />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
