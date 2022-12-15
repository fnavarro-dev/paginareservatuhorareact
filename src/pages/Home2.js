import React from "react";
import {NavBarComponent, ReservaTuHora} from "../components";
import CalendarPretty from "../components/CalendarPretty";
import './Home2.css';
import fotocabecera from '../../src/assets/img/Rectangle204.png'




const HomePage2= () => {
    return (
            <div>
                        <div 
                className='fondo'
                //ABAJO ES UN CSS INLINE
                // style={{
                //backgroundImage: 'url("https://images5.alphacoders.com/532/532559.jpg")',
                // backgroundColor: 'red',
                // backgroundPosition: 'center',
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat'
                // }}
                >
                
                
                <NavBarComponent />

                <img src={fotocabecera} alt="Logo" />

                
                    <div class="mx-5">
                    <h2 class="tituloblanco">
                    Elige tu fecha
                    </h2>
                    </div>

                

                <div class="mx-auto">
                <CalendarPretty />
                </div>

                <div class="container">
                        <div class="row">
                            <ReservaTuHora />
                        </div>
                
                
                </div>
                        </div>

        


{/* <div className=" mb-32 lex flex-col bg-pinkCustom dark:bg-blackCustom h-full w-full  text-black dark:text-white ">
      <div className="mx-10 first-letter:lg:mx-32 relative">
        <img
          className="lg:h-72 h-44 w-full rounded-2xl absolute "
          src={musicHome}
          alt="fond page d'accueil"
        />
        <div className="abosolute overflow-hidden z-30 opacity-60">
       
        </div>
      </div>
      <div className="m-5">
        <h2 className="mx-5px-3 py-1 rounded-lg text-2xl  text-black dark:text-white">
          Best Genres
        </h2>
        <div className="flex ">
          {bestGenres.map((genre, index) => (
          ))}
        </div>
      </div>
      <div className="mx-5">
        <h2 className="px-3 py-1 rounded-lg text-2xl  text-black dark:text-white">
          Favorites
        </h2>
        <FavouritesList handleCurrentId={handleCurrentId} />
      </div>
      <div className="mx-5 py-14">
        <RecentlyPlayed handleCurrentId={handleCurrentId} />
      </div>

      
        <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
        <div className="pb-24">
          <button
            className=" w-full flex p-2 bg-grayCustom justify-center
      opacity-90 rounded-md  text-white
      items-center flex-row align-middle mb-4"
            type="button"
            onClick={() => setShowTracks(!showTracks)}
          >
            {showTracks ? "Show less ..." : "Show all ..."}
          </button>
        </div>
      </div>
    </div> */}


            </div>
        
    );
};

export default HomePage2;


