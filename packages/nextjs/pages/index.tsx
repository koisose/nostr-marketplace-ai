
import type { NextPage } from "next";

import { MetaHeader } from "~~/components/MetaHeader";
import { useUser } from '@auth0/nextjs-auth0/client';
const Home: NextPage = () => {
  const { user } = useUser();
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Nostr Marketplace</span>

          </h1>
          <p>Search for an item in nostr marketplace using AI</p>
          {user && <div className="flex flex-wrap gap-4 px-5 justify-center">
            <button
              className={`h-10 btn btn-primary btn-sm px-2 rounded-full space-x-3 `}

              >
              <span>Sell something</span>
            </button>
        </div>}


        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <input
            type="text"
            placeholder="Search..."
            className="input  w-full px-5  border border-primary text-lg sm:text-2xl placeholder-grey "

          />
          <div className="flex flex-wrap gap-4 my-8 px-5 justify-center">

              <div  className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 mb-6 space-y-1 py-4">
                <div className="flex">
                  <div className="flex flex-col gap-1">
                    <div className="card card-compact bg-base-100 mb-2 shadow-lg sm:min-w-[300px] shadow-secondary">
                      <figure className="relative">
                        {/* eslint-disable-next-line  */}
                        <img src={`https://source.unsplash.com/random`} alt="NFT Image" className="h-60 min-w-full" />

                      </figure>
                      <div className="card-body space-y-3">
                        <div className="flex items-center justify-center">
                          <p className="text-xl p-0 m-0 font-semibold">popo</p>

                        </div>



                      </div>
                    </div>
                    <button
                      className={`h-10 btn btn-primary btn-sm px-2 rounded-full space-x-3 `}

                      >
                      <span>Buy</span>
                    </button>
                  </div>

                </div>

              </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
