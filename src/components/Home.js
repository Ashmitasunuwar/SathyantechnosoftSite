import ST_DataContext from '../context/ ST_DataContext';
import { useContext, useEffect, useState } from 'react';
import APJ1 from '../css/Images/APJ.webp'
import APJ2 from '../css/Images/DR.-APJ-ABDUL-KALAM.webp'
import APJ3 from '../css/Images/DrAbdulkalam1..jpeg'
import ProfileCard from './ProfileCard';
import Durga from '../css/Images/Durga-Pujo-and-Mysores-Dasara-lg-cov.jpg'
import Palace1 from '../css/Images/palace.avif'
import Palace2 from '../css/Images/palace2.webp'


function Home() {

    const context = useContext(ST_DataContext);
    const data = context.data.APIdata;
    const [curData, setcurData] = useState(null)
    const [showComponent, setShowComponent] = useState(false);


    const handleClick = (value) => {
        console.log("aash", value)
        setcurData(value);
        setShowComponent(true);
    }


    const renderSideBar = data.map((value, index) => {
        return (<>
            <div className='sideBarelements' key={index} onClick={() => handleClick(value)} >
                {value}
            </div>
        </>)
    })

    return (
        <div className='home'>
            <div className='sideBar'>
                {renderSideBar}
            </div>
            {showComponent ? <ProfileCard curData={curData} /> : (
                <div className='All'>

                    <img src={Durga} height={400} width={400} />
                    <h4> Mysore Dasara, a Royal Festival Celebrating victory of Truth over Evil</h4>
                    <p>
                        Durga Puja is one of the most important and joyful festivals in India, especially in the state of West Bengal. It is a celebration that brings together people from all walks of life, filled with happiness, devotion, and cultural activities. This festival, which honors Goddess Durga, is celebrated with immense enthusiasm every year. In 2024, Durga Puja will be celebrated from October 11 to October 15. These five days will be packed with colorful rituals, cultural programs, and a sense of unity.</p>
                    <img src={Palace1} height={400} width={400} />
                    <h4>
                        Torchlight Parade
                    </h4>
                    <p>Mysore Dasara 2024 is all set to be a grand 10-day celebration, starting on October 3 and ending on October 12 with Vijayadashami. This festival, which begins with Navratri, celebrates the victory of Goddess Chamundeshwari over the demon king Mahishasura. Every year, thousands of people gather to witness the exciting events and traditions that make this festival so special

                        Read more at: <a href='https://www.nativeplanet.com/news/mysore-dasara-2024-a-grand-celebration-from-october-3-to-12-check-how-to-participate-013843.html'>https://www.nativeplanet.com/news/mysore-dasara-2024-a-grand-celebration-from-october-3-to-12-check-how-to-participate-013843.html'</a></p>
                    <p>Exciting Events and Attractions The Mysore Dasara festivities include a wide range of events, such as cultural programs, sports competitions, film festivals, and the famous Jumbo Savari (elephant procession) on the final day. One of the highlights of the festival is the stunning illumination of the Mysore Palace and the entire city, which creates a magical atmosphere that attracts visitors from all over the world.

                        Read more at: <a href='https://www.nativeplanet.com/news/mysore-dasara-2024-a-grand-celebration-from-october-3-to-12-check-how-to-participate-013843.html'>'https://www.nativeplanet.com/news/mysore-dasara-2024-a-grand-celebration-from-october-3-to-12-check-how-to-participate-013843.html'</a></p>
                    <img src={Palace2} height={400} width={400} />
                    <h4>Mysore Dasara 2024 | Jamboo Savari</h4>
                    <p>In addition to the cultural performances, there will be other exciting events like the food mela, flower show, Farmers' Dasara, Women's Dasara, Yuva Dasara, and children's Dasara. Poetry recitals and other performances will be held across 11 different platforms, making this year's Dasara a truly vibrant celebration of Karnataka's traditions. Famous Dasara Processions One of the most awaited events of Mysore Dasara is the Jumbo Savari, a grand procession of caparisoned elephants carrying the idol of Goddess Chamundeshwari placed in a golden howdah. The procession will take place on October 12, starting from the Ambavilasa Palace and covering a 6-kilometer route to Banni Mantapa. The procession will be led by the Chief Minister and other dignitaries who will shower flowers on the goddess.

                        Read more at: <a href='https://www.nativeplanet.com/news/mysore-dasara-2024-a-grand-celebration-from-october-3-to-12-check-how-to-participate-013843.html'>'https://www.nativeplanet.com/news/mysore-dasara-2024-a-grand-celebration-from-october-3-to-12-check-how-to-participate-013843.html'</a></p>
                </div>
            )}
        </div>

    )
}

export default Home
