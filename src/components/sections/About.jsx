import Data from "@data/sections/about.json";
import LinesIcon from "@layouts/svg-icons/Lines";
import Image from "next/image";

const AboutSection = () => {
  return (
    <>
      {/* about */}
      <section id="about">
        <div className="container py-8">
          <div className="row justify-content-between items-center">
            <div className="col-lg-6 col-xl-5">
              <div className="">
                <h2
                  className="mil-up mil-mb-60 text-2xl font-bold tit-about"
                  dangerouslySetInnerHTML={{ __html: Data.title }}
                />
                <div
                  className="mil-text mil-up mil-mb-30 desc-about"
                  dangerouslySetInnerHTML={{ __html: Data.description }}
                />

                {/* <div className="mil-about-quote">
                  <div className="mil-avatar mil-up">
                    <img src={Data.avatar.image} alt={Data.avatar.alt} />
                  </div>
                  <h6
                    className="mil-quote mil-up"
                    dangerouslySetInnerHTML={{ __html: Data.subtitle }}
                  />
                </div> */}
              </div>
            </div>
            <div className="col-lg-5 items-center">
              <div className="mil-about-photo ">
                <div className="mil-lines-place">
                  <LinesIcon />
                </div>
                <div className="mil-up mil-img-frame ">
                  <Image
                    src={Data.image.url}
                    alt={Data.image.alt}
                    width={300}
                    height={300}
                    className="mil-scale mb-8"
                    data-value-1="1"
                    data-value-2="1.2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
    </>
  );
};

export default AboutSection;
