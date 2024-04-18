import Data from "@data/sections/devis.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import LinesIcon from "@layouts/svg-icons/Lines";

const TeamSection = () => {
  return (
    <>
      {/* team */}
      <section className="bg-contact">
        <div className="container ">
          <div className="row items-center">
            <div className="col-lg-6">
              <div className="mil-mb-90 devis-img">
                <img src={Data.image.url} alt={Data.image.alt} />
              </div>
            </div>
            <div className="col-lg-6 py-4">
              <h1 className="text-center mb-5 text-white text-3xl font-bold">
                Demander votre devis gratuitement
              </h1>
              <div className="bg-white flex  flex-1 flex-col justify-center px-2 py-3 lg:px-2 rounded-xl border-0 ">
                <div className="mt-3 mb-3 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" action="#" method="POST">
                    <div className="mt-2">
                      <input
                        id="nom"
                        name="nom"
                        placeholder="Nom Complet"
                        required
                        className="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff5733] sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        id="tele"
                        name="tele"
                        type="tele"
                        required
                        placeholder="Téléphone"
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff5733] sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff5733] sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-[#ff5733] px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        ENVOYER
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* team end */}
    </>
  );
};

export default TeamSection;
