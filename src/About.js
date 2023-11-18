import './About.css'
import bgvid2 from './bgvid2.mp4'
import Footer from './Footer'
import Header from './Header'
import { FaLongArrowAltRight } from 'react-icons/fa'
import image1 from './one.jpg'
import image2 from './two.jpg'
import image3 from './three.jpg'

function About() {
    return(
        <div className='about'>
            <Header />
            <div className='about_body'>
                <div>
                    <video autoPlay muted loop id="bgvid2">
                        <source src={bgvid2} type="video/mp4" />
                    </video>    
                    <div className='about_section_one_div'>
                        <h3>About us</h3>
                        <h1>We accelerate sustainable and inclusive growth</h1>
                    </div>
                    <section className='about_section_two'>
                    <div className='about_section_two_div1'>
                        <p>Sint eiusmod ex magna qui ipsum cupidatat velit aute labore. Consequat eu non aliquip cillum aliquip et velit et magna. Dolor consequat occaecat irure velit est incididunt amet pariatur nostrud cupidatat amet. Ipsum nisi veniam dolor id. </p>
                        <p>Dolor eu duis officia aute cupidatat et reprehenderit reprehenderit et fugiat consectetur ipsum excepteur. Nostrud incididunt aute et veniam enim reprehenderit enim. Elit enim et do in laboris ea culpa voluptate occaecat in.</p>
                       
                    </div>
                    <div className='about_section_two_div2'>
                        <p> Proident id culpa dolore veniam adipisicing ipsum. Labore cillum anim et non sit quis labore et. Lorem velit minim exercitation laboris laboris velit excepteur aliquip. Reprehenderit dolor ut cupidatat sit qui.</p>
                    </div>
                </section>
                <section>
                    <div className='home_section_two_intermediary'>
                        <h1>Discover Capial X</h1>
                        <p>Elit ut quis proident velit labore do id consectetur. Pariatur non cillum officia magna. In veniam enim reprehenderit enim. Elit ut quis proident velit labore do id consectetur. Pariatur non cillum officia magna. In veniam enim reprehenderit enim.</p>
                    </div>
                    <div className='home_section_two_one'>
                        <img src={image1} className='section_two_image' />
                        <div className='home_section_one_div'>
                            <h1>How we work?</h1>
                            <p>Exercitation anim id occaecat veniam aute veniam laborum cillum cupidatat tempor occaecat excepteur aliquip fugiat. Eu mollit esse eu minim elit commodo aliqua cupidatat. Laboris nulla qui mollit qui culpa deserunt adipisicing sint quis ad id quis aliqua.</p>
                        </div>
                    </div>
                    <div className='home_section_two_two'>
                        <img src={image2} className='section_two_image' />
                        <div className='home_section_two_div'>
                            <h1>Who we are?</h1>
                            <p>Nostrud dolor anim fugiat mollit. Mollit ad duis sit cillum esse enim aute proident qui irure proident deserunt. Cupidatat dolore pariatur commodo exercitation. Deserunt sunt sint Lorem fugiat minim consectetur magna qui Lorem tempor veniam deserunt laboris. Et excepteur ut quis minim est esse eiusmod cillum quis.</p>
                        </div>
                    </div>
                </section>
                <section className='about_section_three'  id='with-hash-sustain'>
                    <h1>Partnership and Collaboration</h1>
                    <h3>Magna ut commodo duis nulla dolor. Consectetur minim aliquip aliqua do. Esse laboris cupidatat et cillum cillum consectetur eiusmod nisi labore laborum consectetur tempor.</h3>
                </section>
                <section className='about_section_four'>
                    <h3>Our mission and vision</h3>
                    <h1>Minim reprehenderit consequat</h1>
                    <div>
                        <div className='about_vision'>
                            <h3>Vision</h3>
                            <p>Adipisicing commodo ex officia dolore nostrud officia occaecat ea nisi nulla aliquip. Deserunt dolor cillum ullamco culpa. Consectetur in do commodo non cupidatat voluptate pariatur enim proident non eu in id. Anim qui culpa cupidatat nulla dolor elit labore tempor aute consectetur.</p>
                        </div>
                        <div className='about_mission'>
                            <h3>Mission</h3>
                            <p>Adipisicing commodo ex officia dolore nostrud officia occaecat ea nisi nulla aliquip. Deserunt dolor cillum ullamco culpa. Consectetur in do commodo non cupidatat voluptate pariatur enim proident non eu in id. Anim qui culpa cupidatat nulla dolor elit labore tempor aute consectetur.</p>
                        </div>
                    </div>
                </section>
                <section className='about_section_five'>
                    <h1>Enim voluptate dolore minim</h1>
                    <div>
                        <div>
                            <img src={image2} className='about_section_five_image' />
                            <h1>Consequat laboris velit.</h1>
                            <p>Aute ad qui labore sint in est enim ad ullamco fugiat tempor ad culpa commodo. Culpa aliqua dolor sunt pariatur et ipsum velit in aute.</p>
                        </div>
                        <div>
                            <img src={image2} className='about_section_five_image' />
                            <h1>Consequat laboris velit.</h1>
                            <p>Aute ad qui labore sint in est enim ad ullamco fugiat tempor ad culpa commodo. Culpa aliqua dolor sunt pariatur et ipsum velit in aute.</p>
                        </div>
                        <div>
                            <img src={image2} className='about_section_five_image' />
                            <h1>Consequat laboris velit.</h1>
                            <p>Aute ad qui labore sint in est enim ad ullamco fugiat tempor ad culpa commodo. Culpa aliqua dolor sunt pariatur et ipsum velit in aute.</p>
                        </div>
                        <div>
                            <img src={image2} className='about_section_five_image' />
                            <h1>Consequat laboris velit.</h1>
                            <p>Aute ad qui labore sint in est enim ad ullamco fugiat tempor ad culpa commodo. Culpa aliqua dolor sunt pariatur et ipsum velit in aute.</p>
                        </div>
                    </div>
                </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About