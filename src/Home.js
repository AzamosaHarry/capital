import Footer from './Footer.js';
import Header from './Header.js';
import './Home.css'
import { FaLongArrowAltRight } from 'react-icons/fa'
import image1 from './one.jpg'
import image2 from './two.jpg'
import image3 from './three.jpg'
import image4 from './four.jpg'
import heroImage from './financial-services_hero_655825058_1536x768_v2.webp'
import { Parallax } from 'react-scroll-parallax';

function Home () {
    return(
        <div className='home'>
            <Header />
            <div className='home_body'>
                <section className='home_section_one'>
                    <div className='home_section_one_div1'>
                    </div>
                    <div className='home_section_one_div2'>
                    </div>
                    <div className='home_section_one_hero'>
                            <h1>Capital X venures</h1>
                            <p>we take pride in our core competencies and unique selling proposition that set us apart. we take pride in our core competencies and unique selling proposition that set us apart.</p>
                            <div className='home_section_one_hero_div'>
                                <h3>Learn more</h3>
                                <FaLongArrowAltRight className='home_link_arrow'/>
                            </div>
                        </div>
                </section>
                <section className='home_section_two'>
                    <div className='home_section_two_start'>
                        <h3>Currently sited globally at</h3>
                        <div>
                            <div>
                                <h3>Abuja</h3>
                            </div>
                            <div>
                                <h3>Dubai</h3>
                            </div>
                            <div>
                                <h3>Lagos</h3>
                            </div>
                            <div>
                                <h3>London</h3>
                            </div>
                        </div>
                    </div>
                    <div className='home_section_two_intermediary'>
                        <h1>Discover Capial X</h1>
                        <p>Elit ut quis proident velit labore do id consectetur. Pariatur non cillum officia magna. In veniam enim reprehenderit enim. Elit ut quis proident velit labore do id consectetur. Pariatur non cillum officia magna. In veniam enim reprehenderit enim.</p>
                    </div>
                    <div className='home_section_two_one'>
                        <img src={image1} className='section_two_image' />
                        <div className='home_section_one_div'>
                            <h1>Financial consulting</h1>
                            <p>we take pride in our core competencies and unique selling proposition that set us apart. we take pride in our core competencies and unique selling proposition that set us apart.</p>
                            <div className='home_section_one_hero_div'>
                                <h3>Learn more</h3>
                                <FaLongArrowAltRight className='home_link_arrow'/>
                            </div>
                        </div>
                    </div>
                    <div className='home_section_two_two'>
                        <img src={image2} className='section_two_image' />
                        <div className='home_section_two_div'>
                            <h1>Debt restructuring</h1>
                            <p>we take pride in our core competencies and unique selling proposition that set us apart. we take pride in our core competencies and unique selling proposition that set us apart.</p>
                            <div className='home_section_one_hero_div'>
                                <h3>Learn more</h3>
                                <FaLongArrowAltRight className='home_link_arrow'/>
                            </div>
                        </div>
                    </div>
                    <div className='home_section_two_three'>
                        <img src={image3} className='section_two_image' />
                        <div className='home_section_one_div'>
                            <h1>Debt financing</h1>
                            <p>we take pride in our core competencies and unique selling proposition that set us apart. we take pride in our core competencies and unique selling proposition that set us apart.</p>
                            <div className='home_section_one_hero_div'>
                                <h3>Learn more</h3>
                                <FaLongArrowAltRight className='home_link_arrow'/>
                            </div>
                        </div>
                    </div>
                    <div className='home_section_two_intermediary'>
                        <h1>Discover Capial X</h1>
                        <p>Elit ut quis proident velit labore do id consectetur. Pariatur non cillum officia magna. In veniam enim reprehenderit enim.</p>
                    </div>
                </section>
                <section className='home_section_three'>
                    <div className='home_section_three_div1'>
                        <div>
                            <img src={image1} className='section_three_image' />
                            <div>
                                <h3>Lorem ipsium dellish</h3>
                                <p>we take pride in our core competencies and unique selling proposition that set us apart. we take pride in our core competencies and unique selling proposition that set us apart</p>
                            </div>
                        </div>
                        <div>
                            <img src={image1} className='section_three_image' />
                            <div>
                                <h3>Lorem ipsium dellish</h3>
                                <p>we take pride in our core competencies and unique selling proposition that set us apart. we take pride in our core competencies and unique selling proposition that set us apart</p>
                            </div>
                        </div>
                        <div>
                            <img src={image1} className='section_three_image' />
                            <div>
                                <h3>Lorem ipsium dellish</h3>
                                <p>we take pride in our core competencies and unique selling proposition that set us apart. we take pride in our core competencies and unique selling proposition that set us apart</p>
                            </div>
                        </div>
                    </div>
                    <div className='home_section_three_div2'>
                        <div className='home_section_three_div2_part1'>
                            <h3>we take pride in our core competencies and unique selling proposition that set us apart</h3>
                            <div className='home_section_one_hero_div'>
                                <h3>Learn more</h3>
                                <FaLongArrowAltRight className='home_link_arrow'/>
                            </div>
                        </div>
                        <div className='home_section_three_div2_part2'>
                            <img src={image1} className='section_three_image' />
                            <div>
                                <h3>we take pride in our core competencies and unique selling proposition that set us apart</h3>
                                <div className='home_section_one_hero_div'>
                                    <h3>Learn more</h3>
                                    <FaLongArrowAltRight className='home_link_arrow'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='home_section_four'>
                    <div className='home_section_four_div1'>
                        <h3>Make things possible</h3>
                        <h1>Carreers at Capital X Ventures</h1>
                        <p>Begin your career with the Goldman Sachs 2024 Summer Internship, where your skills can make an impact across our business.</p>
                        <div className='home_section_one_hero_div'>
                            <h3>Explore careers</h3>
                            <FaLongArrowAltRight className='home_link_arrow'/>
                        </div>
                    </div>
                    <div className='home_section_four_div2'>
                        <img src={image1} className='section_four_image' />
                        <img src={image2} className='section_four_image' />
                        <img src={image3} className='section_four_image' />
                        <img src={image4} className='section_four_image' />
                    </div>
                </section>
                <section className='home_section_five' id='with-hash-contact'>
                    <h3>How can we help you?</h3>
                    <div className='home_section_one_hero_div'>
                        <h3>Get in touch with us today</h3>
                        <FaLongArrowAltRight className='home_link_arrow'/>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Home;