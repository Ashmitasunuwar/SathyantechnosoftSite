
import APJ from '../css/Images/APJ.webp'
import RK from '../css/Images/RK.jpg'
import Durga from '../css/Images/Durga-Pujo-and-Mysores-Dasara-lg-cov.jpg'
import Palace1 from '../css/Images/palace.avif'
import Palace2 from '../css/Images/palace2.webp'
//see cur data value and based on that show profile card
import Home from './Home'
function ProfileCard({
    curData }) {


    const renderCard = (card) => {
        console.log('card', card, typeof card);
        if (card === 'Political') {
            return (
                <div className='politic'>  <img src={APJ} height={400} width={400} />
                    <h4>
                        A. P. J. Abdul Kalam|Former President of India

                    </h4>
                    <p>Born on 15th October 1931 at Rameswaram in Tamil Nadu, Dr. Avul Pakir Jainulabdeen Abdul Kalam, specialized in Aeronautical Engineering from Madras Institute of Technology. Dr. Kalam made significant contribution as Project Director to develop India's first indigenous Satellite Launch Vehicle (SLV-III) which successfully injected the Rohini satellite in the near earth orbit in July 1980 and made India an exclusive member of Space Club. He was responsible for the evolution of ISRO's launch vehicle programme, particularly the PSLV configuration. After working for two decades in ISRO and mastering launch vehicle technologies, Dr. Kalam took up the responsibility of developing Indigenous Guided Missiles at Defence Research and Development Organisation as the Chief Executive of Integrated Guided Missile Development Programme (IGMDP). He was responsible for the development and operationalisation of AGNI and PRITHVI Missiles and for building indigenous capability in critical technologies through networking of multiple institutions. He was the Scientific Adviser to Defence Minister and Secretary, Department of Defence Research & Development from July 1992 to December 1999. During this period he led to the weaponisation of strategic missile systems and the Pokhran-II nuclear tests in collaboration with Department of Atomic Energy, which made India a nuclear weapon State. He also gave thrust to self-reliance in defence systems by progressing multiple development tasks and mission projects such as Light Combat Aircraft.</p>
                    <p>
                        As Chairman of Technology Information, Forecasting and Assessment Council (TIFAC) and as
                        an eminent scientist, he led the country with the help of 500 experts to
                        arrive at Technology Vision 2020 giving a road map for transforming India
                        from the present developing status to a developed nation. Dr. Kalam has
                        served as the Principal Scientific Advisor to the Government of India,
                        in the rank of Cabinet Minister, from November 1999 to November 2001
                        and was responsible for evolving policies, strategies and missions for
                        many development applications. Dr. Kalam was also the Chairman, Ex-officio,
                        of the Scientific Advisory Committee to the Cabinet (SAC-C) and piloted India
                        Millennium Mission 2020.<br />
                        <br />

                        Dr. Kalam took up academic pursuit as Professor,<strong>Technology & Societal Transformation at Anna University </strong> , Chennai from November 2001 and was involved in teaching and research tasks.
                        Above all he took up a mission to ignite the young minds for national development by meeting high school students
                        across the country.<br /><br />

                        In his literary pursuit four of Dr. Kalam's books
                        <strong> - "Wings of Fire", "India 2020 - A Vision for the New Millennium", "My journey" and "Ignited Minds - Unleashing the power within India"</strong> have become household names in India and among the Indian nationals abroad. These books have been translated in many Indian languages.

                        Dr. Kalam is one of the most distinguished scientists of India with the unique honour of receiving honorary doctorates from 30 universities and institutions. He has been awarded the coveted civilian awards - Padma Bhushan (1981) and Padma Vibhushan (1990) and the highest civilian award Bharat Ratna (1997). He is a recipient of several other awards and Fellow of many professional institutions.
                        Dr. Kalam became the 11th President of India on 25th July 2002. His focus is on transforming India into a developed nation by 2020.</p></div>
            )
        }

        else if (card === 'Entertainment & lifestyle') {
            return (<div className='entertainment'>
                <img src={RK} height={400} width={400} />
                <h4>
                    Dr. RAJKUMAR- THE PERSON BEHIND THE PERSONALITY
                </h4>
                <p>
                    Dr. Rajkumar's birth anniversary is celebrated on April 24. He was born on April 24, 1929 in Dodda Gajanur, a hamlet in the Talavady taluk of Tamil Nadu. His birth name was Singanalluru Puttaswamaiah Muthuraj,
                    but he was renamed Rajkumar for his on-screen roles.
                    Dr. Rajkumar was an Indian actor and singer who worked in Kannada cinema.
                    He was a cultural icon and one of the most influential figures in the Kannada
                    film industry. His films were known for their themes and treatment, and for
                    bridging the gap between popular and art films. He died of a heart attack
                    in Bangalore, Karnataka on April 12, 2006.
                </p>
                <p>
                    In Kannada<strong> Dr. RAJKUMAR- THE PERSON BEHIND THE PERSONALITY
                        Dr. Rajkumar: The Person behind The Personality</strong> is a personal,
                    passionately penned and authentic biographical tribute to the person who
                    shone as Karnataka's greatest icon, presented by his family through his son,
                    the leading Kannada superstar, Puneeth Rajkumar's heartfelt expressions and
                    explorations are presented here and is co-authored by his friend Prakruthi N.
                    Banwasi, a renowned educationalist. It is an attempt to give an insight into
                    the many layers that underlay his persona, replete with the essence of every
                    notable influence in his life, including unheard anecdotes, incidents and
                    voices. In all, it is a legend's travelogue in 272 pages, about a lakh words
                    and 1750 selected pictures in which Rajkumar's soul is preserved and mirrored for posterity. This biography seeks to preserve the soul of the legendary Dr. Rajkumar, easily the most iconic Kannadiga who has won the hearts of generations of Kannadigas with his immense acting and singing abilities (in a career spanning 208 movies) and his simplistic fortitude. This is the first ever authentic biography of Dr. Rajkumar, presented both in Kannada and English. Another first in the form of an international coffee table book that has been planned on a grand scale by the Rajkumar family to ensure that the many nuances of Rajkumar that has endeared him to the common man; are made known in detail to the millions of Rajkumar's fans, across the globe.
                    Author: PUNEETH RAJKUMAR AND PRAKRUTHI N BANSWASI.
                </p>
            </div>)
        }
        else if (card === 'All') {
            return (
                <div className='All'>

                    <img src={Durga} height={400} width={400} />
                    <h4> Mysore Dasara, a Royal Festival Celebrating victory of Truth over Evil</h4>
                    <p>
                        Durga Puja is one of the most important and joyful festivals in India, especially in the state of West Bengal. It is a celebration that brings together people from all walks of life, filled with happiness,
                        devotion, and cultural activities. This festival, which honors Goddess Durga,
                        is celebrated with immense enthusiasm every year. In 2024, Durga Puja will be
                        celebrated from October 11 to October 15. These five days will be packed
                        with colorful rituals, cultural programs, and a sense of unity.</p>
                    <img src={Palace1} height={400} width={400} />
                    <h4>
                        Torchlight Parade
                    </h4>
                    <p>Mysore Dasara 2024 is all set to be a grand 10-day celebration, starting on October 3 and ending on October 12 with Vijayadashami. This festival, which begins with Navratri, celebrates the victory of Goddess Chamundeshwari over the demon king Mahishasura. Every year, thousands of people gather to witness the exciting events and traditions that make this festival so special

                        Read more at:<a href='https://www.nativeplanet.com/news/mysore-dasara-2024-a-grand-celebration-from-october-3-to-12-check-how-to-participate-013843.html'>https://www.nativeplanet.com/news/mysore-dasara-2024-a-grand-celebration-from-october-3-to-12-check-how-to-participate-013843.html'</a></p>
                    <p>Exciting Events and Attractions The Mysore Dasara festivities include a wide range of events, such as cultural programs, sports competitions, film festivals, and the famous Jumbo Savari (elephant procession) on the final day. One of the highlights of the festival is the stunning illumination of the Mysore Palace and the entire city, which creates a magical atmosphere that attracts visitors from all over the world.

                        Read more at:<a href='https://www.nativeplanet.com/news/mysore-dasara-2024-a-grand-celebration-from-october-3-to-12-check-how-to-participate-013843.html'>'https://www.nativeplanet.com/news/mysore-dasara-2024-a-grand-celebration-from-october-3-to-12-check-how-to-participate-013843.html'</a></p>



                    <img src={Palace2} height={400} width={400} />

                    <h4>Mysore Dasara 2024 | Jamboo Savari</h4>
                    <p>In addition to the cultural performances, there will be other exciting events like the food mela, flower show, Farmers' Dasara, Women's Dasara, Yuva Dasara, and children's Dasara. Poetry recitals and other performances will be held across 11 different platforms, making this year's Dasara a truly vibrant celebration of Karnataka's traditions. Famous Dasara Processions One of the most awaited events of Mysore Dasara is the Jumbo Savari, a grand procession of caparisoned elephants carrying the idol of Goddess Chamundeshwari placed in a golden howdah. The procession will take place on October 12, starting from the Ambavilasa Palace and covering a 6-kilometer route to Banni Mantapa. The procession will be led by the Chief Minister and other dignitaries who will shower flowers on the goddess.

                        Read more at:<a href='https://www.nativeplanet.com/news/mysore-dasara-2024-a-grand-celebration-from-october-3-to-12-check-how-to-participate-013843.html'>'https://www.nativeplanet.com/news/mysore-dasara-2024-a-grand-celebration-from-october-3-to-12-check-how-to-participate-013843.html'</a></p>
                </div>

            )
        }

    }



    return (
        <div>

            {renderCard(curData)}
        </div>
    )
}

export default ProfileCard