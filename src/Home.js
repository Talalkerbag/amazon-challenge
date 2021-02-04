import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
            </div>
            <div className="home__row">
                <Product id="1" title='The Epic of Gilgamesh' price={29.99} image="https://pictures.abebooks.com/isbn/9780848805012-us.jpg" rating={5}/>
                <Product id="2" title='The Last Wish' price={19.99} image="https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Andrzej_Sapkowski_-_The_Last_Wish.jpg/220px-Andrzej_Sapkowski_-_The_Last_Wish.jpg" rating={5}/>
            </div>

            <div className="home__row">
                <Product id="3" title='Sword of Destiny' price={20.99} image="https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Sword_of_Destiny_UK.jpg/220px-Sword_of_Destiny_UK.jpg" rating={5}/>
                <Product id="4" title='Blood of Elves' price={20.99} image="https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Blood_of_Elves_UK.jpg/220px-Blood_of_Elves_UK.jpg" rating={5}/>
                <Product id="5" title='Time of Contempt' price={20.99} image="https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Time_of_Contempt_UK.jpg/220px-Time_of_Contempt_UK.jpg" rating={5}/>
            </div>

            <div className="home__row">
                <Product id="6" title='Baptism of Fire' price={25.99} image="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Baptism_of_Fire_UK.jpg/220px-Baptism_of_Fire_UK.jpg" rating={5}/>
            </div>
        </div>
    )
}

export default Home
