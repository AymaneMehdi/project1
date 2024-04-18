import Data from "@data/sections/team.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import LinesIcon from "@layouts/svg-icons/Lines";

const TeamSection = () => {
  return (
    <>
      {/* team */}
      <section className="bg-contact">
        <div className="container mil-p-120-30">
          <div className="row justify-content-between align-items-center">
            <div className="text-center">
              <div className="mil-mb-90">
                <div
                  className="mil-text text-white mil-up mil-mb-60"
                  dangerouslySetInnerHTML={{ __html: Data.description }}
                />

                <div className="mil-up">
                  <Link
                    href={Data.button.link}
                    className="mil-button-contact mil-arrow-place "
                  >
                    <span>{Data.button.label}</span>
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="mil-team-list">
                <div className="mil-lines-place">
                  <LinesIcon />
                </div>

                <div className="row mil-mb-60">
                  <div className="col-sm-6"></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* team end */}
    </>
  );
};

export default TeamSection;
